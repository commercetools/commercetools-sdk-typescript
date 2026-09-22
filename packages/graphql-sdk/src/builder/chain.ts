/**
 * A fluent, chainable projection builder over the generated schema selection types.
 *
 * The accumulated selection is tracked in the type, so the result contains exactly the fields
 * that were chained and nothing else.
 */

import type { HasWhereResource, Predicate, WhereBuilder } from './where'
import { resolveWhere } from './where'

/** Marker carrying the accumulated selection of a chain. */
declare const SELECTION: unique symbol

export interface ChainMarker<TFields, TArgs> {
  readonly [SELECTION]?: { fields: TFields; args: TArgs }
}

/** Extracts the selection object a chain accumulated. */
export type SelectionOf<TChain> =
  TChain extends ChainMarker<infer TFields, infer TArgs>
    ? {} extends TArgs
      ? TFields
      : TFields & { __args: TArgs }
    : never

type ArgsOf<TSelection> = TSelection extends { __args?: infer TArgs }
  ? NonNullable<TArgs>
  : {}

/**
 * genql marks scalar fields as `boolean | number` and object fields as a nested selection
 * interface, which is what tells the two apart. `__scalar` and `__typename` are genql
 * internals and are exposed through dedicated chain methods instead.
 */
type FieldsOf<TSelection> = Omit<
  TSelection,
  '__args' | '__scalar' | '__typename'
>

/**
 * A scalar field that also takes arguments, such as a localized string like `name(locale:)`,
 * is `{ __args: ... } | boolean | number`, so the union carrying `boolean` is what marks a
 * field as scalar, not the whole type being assignable to it.
 */
type IsScalarField<TField> = boolean extends TField ? true : false

/** The `__args` member of a field type, for the fields that have one. */
type ArgsPartOf<TField> = Extract<NonNullable<TField>, { __args: any }>

/**
 * `where` takes a [Query Predicate](https://docs.commercetools.com/api/predicates/query), which
 * the builder in `./where` can assemble. The predicate string stays a plain overload, so it is
 * still the way to express anything the builder does not cover, and existing calls are untouched.
 *
 * The builder overload only appears once the resource being filtered is known, which it is for
 * every paged query field, from the element type of its `results`.
 */
type WhereMethod<TSelection, TFields, TArgs, TResult, TPredicate> =
  HasWhereResource<TResult> extends true
    ? {
        (
          predicate: TPredicate
        ): Chain<TSelection, TFields, TArgs & { where: TPredicate }, TResult>
        (
          build: WhereBuilder<TResult>
        ): Chain<TSelection, TFields, TArgs & { where: TPredicate }, TResult>
      }
    : (
        predicate: TPredicate
      ) => Chain<TSelection, TFields, TArgs & { where: TPredicate }, TResult>

type ArgMethods<TSelection, TFields, TArgs, TResult> = {
  [TArg in keyof ArgsOf<TSelection>]-?: TArg extends 'where'
    ? WhereMethod<
        TSelection,
        TFields,
        TArgs,
        TResult,
        NonNullable<ArgsOf<TSelection>[TArg]>
      >
    : (
        value: NonNullable<ArgsOf<TSelection>[TArg]>
      ) => Chain<
        TSelection,
        TFields,
        TArgs & { [P in TArg]: NonNullable<ArgsOf<TSelection>[TArg]> },
        TResult
      >
}

/**
 * A scalar field is selected by calling it. When it takes arguments they are chained on the
 * chain its callback receives, the same way arguments are chained anywhere else:
 * `name(name => name.locale('en'))`.
 */
type ScalarFieldMethod<
  TFieldType,
  TSelection,
  TFields,
  TArgs,
  TResult,
  TField extends PropertyKey,
> = [ArgsPartOf<TFieldType>] extends [never]
  ? () => Chain<TSelection, TFields & { [P in TField]: true }, TArgs, TResult>
  : (
      select?: (
        chain: Chain<ArgsPartOf<TFieldType>, {}, {}>
      ) => ChainMarker<any, any>
    ) => Chain<TSelection, TFields & { [P in TField]: true }, TArgs, TResult>

/**
 * The response type of a field, which is what the `where` of a nested chain is derived from.
 * A list resolves to its element type, so `results` on a query result hands back the resource
 * itself. `unknown` when the response type is not known, which switches `where` back to taking
 * only a predicate string.
 */
export type ResultFieldOf<TResult, TField> =
  TField extends keyof NonNullable<TResult>
    ? NonNullable<TResult>[TField] extends readonly (infer TItem)[]
      ? TItem
      : NonNullable<NonNullable<TResult>[TField]>
    : unknown

type FieldMethods<TSelection, TFields, TArgs, TResult> = {
  [TField in keyof FieldsOf<TSelection>]-?: IsScalarField<
    FieldsOf<TSelection>[TField]
  > extends true
    ? ScalarFieldMethod<
        FieldsOf<TSelection>[TField],
        TSelection,
        TFields,
        TArgs,
        TResult,
        TField
      >
    : <TSubChain extends ChainMarker<any, any>>(
        select: (
          chain: Chain<
            NonNullable<FieldsOf<TSelection>[TField]>,
            {},
            {},
            ResultFieldOf<TResult, TField>
          >
        ) => TSubChain
      ) => Chain<
        TSelection,
        TFields & { [P in TField]: SelectionOf<TSubChain> },
        TArgs,
        TResult
      >
}

interface ChainExtras<TSelection, TFields, TArgs, TResult> {
  /**
   * Selects every scalar field of this type.
   */
  all(): Chain<TSelection, TFields & { __scalar: true }, TArgs, TResult>
  /** Selects the `__typename` meta field. */
  typename(): Chain<TSelection, TFields & { __typename: true }, TArgs, TResult>
}

/**
 * `TResult` is the response type matching `TSelection`, carried along so that `where` knows
 * which resource it filters over. It defaults to `unknown`, which leaves every member behaving
 * exactly as it did before it was threaded through.
 */
export type Chain<
  TSelection,
  TFields = {},
  TArgs = {},
  TResult = unknown,
> = ArgMethods<TSelection, TFields, TArgs, TResult> &
  FieldMethods<TSelection, TFields, TArgs, TResult> &
  ChainExtras<TSelection, TFields, TArgs, TResult> &
  ChainMarker<TFields, TArgs>

/** Reads the plain genql selection object out of a chain at runtime. */
const BUILD = Symbol.for('@commercetools/graphql-sdk/chain-build')

interface ChainState {
  fields: Record<string, unknown>
  args: Record<string, unknown>
}

function build(state: ChainState): Record<string, unknown> {
  return Object.keys(state.args).length > 0
    ? { ...state.fields, __args: state.args }
    : { ...state.fields }
}

/**
 * Arguments whose string value a callback can build instead, rather than the callback being a
 * projection. `where` takes a query predicate, which is what `./where` assembles.
 */
const PREDICATE_ARGS = new Set(['where'])

/**
 * Creates a chain.
 *
 * Which kind of member is being called is decided from the call itself, which is
 * unambiguous for every generated schema member:
 *
 * - no argument            -> a scalar field, selected as `true`
 * - a function argument    -> an object field, recursed into
 * - any other argument     -> a field argument, collected into `__args`
 *
 * The one exception is a {@link PREDICATE_ARGS} argument given a function, which builds the
 * argument's own string rather than projecting anything.
 */
export function createChain(): any {
  const state: ChainState = { fields: {}, args: {} }

  const proxy: any = new Proxy(
    {},
    {
      get(_target, property) {
        if (property === BUILD) {
          return () => build(state)
        }

        if (typeof property !== 'string') {
          return undefined
        }

        if (property === 'all') {
          return () => {
            state.fields.__scalar = true
            return proxy
          }
        }

        if (property === 'typename') {
          return () => {
            state.fields.__typename = true
            return proxy
          }
        }

        return (...args: unknown[]) => {
          const [value] = args

          // `name()` and `name(undefined)` both select the field itself: the argument of a
          // scalar field is optional, so an omitted one must not become an argument.
          if (args.length === 0 || value === undefined) {
            state.fields[property] = true
            return proxy
          }

          if (typeof value === 'function') {
            if (PREDICATE_ARGS.has(property)) {
              state.args[property] = resolveWhere(
                value as (resource: unknown) => Predicate
              )
              return proxy
            }

            state.fields[property] = resolveChain(
              (value as (chain: unknown) => unknown)(createChain())
            )
            return proxy
          }

          state.args[property] = value
          return proxy
        }
      },
    }
  )

  return proxy
}

/** Turns whatever a selection callback returned into a plain genql selection object. */
export function resolveChain(result: unknown): Record<string, unknown> {
  if (result === null || typeof result !== 'object') {
    throw new TypeError(
      'A selection callback must return the chain it was given, for example `customers => customers.total()`.'
    )
  }

  const builder = (result as Record<symbol, unknown>)[BUILD]

  if (typeof builder !== 'function') {
    throw new TypeError(
      'A selection callback must return the chain it was given, for example `customers => customers.total()`.'
    )
  }

  return (builder as () => Record<string, unknown>)()
}
