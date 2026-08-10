/**
 * A fluent, chainable projection builder over the generated schema selection types.
 *
 * This is the TypeScript counterpart of the Java SDK's projection roots
 * (`root -> root.results().firstName()`) and the .NET SDK's ZeroQL selectors
 * (`c => new { c.FirstName }`), with one difference: the accumulated selection is tracked
 * in the type, so the result contains exactly the fields that were chained and nothing else.
 */

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
 * A scalar field that also takes arguments - a localized string such as `name(locale:)` -
 * is `{ __args: ... } | boolean | number`, so the union carrying `boolean` is what marks a
 * field as scalar, not the whole type being assignable to it.
 */
type IsScalarField<TField> = boolean extends TField ? true : false

/** The `__args` member of a field type, for the fields that have one. */
type ArgsPartOf<TField> = Extract<NonNullable<TField>, { __args: any }>

type ArgMethods<TSelection, TFields, TArgs> = {
  [TArg in keyof ArgsOf<TSelection>]-?: (
    value: NonNullable<ArgsOf<TSelection>[TArg]>
  ) => Chain<
    TSelection,
    TFields,
    TArgs & { [P in TArg]: NonNullable<ArgsOf<TSelection>[TArg]> }
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
  TField extends PropertyKey,
> = [ArgsPartOf<TFieldType>] extends [never]
  ? () => Chain<TSelection, TFields & { [P in TField]: true }, TArgs>
  : (
      select?: (
        chain: Chain<ArgsPartOf<TFieldType>, {}, {}>
      ) => ChainMarker<any, any>
    ) => Chain<TSelection, TFields & { [P in TField]: true }, TArgs>

type FieldMethods<TSelection, TFields, TArgs> = {
  [TField in keyof FieldsOf<TSelection>]-?: IsScalarField<
    FieldsOf<TSelection>[TField]
  > extends true
    ? ScalarFieldMethod<
        FieldsOf<TSelection>[TField],
        TSelection,
        TFields,
        TArgs,
        TField
      >
    : <TSubChain extends ChainMarker<any, any>>(
        select: (
          chain: Chain<NonNullable<FieldsOf<TSelection>[TField]>, {}, {}>
        ) => TSubChain
      ) => Chain<
        TSelection,
        TFields & { [P in TField]: SelectionOf<TSubChain> },
        TArgs
      >
}

interface ChainExtras<TSelection, TFields, TArgs> {
  /**
   * Selects every scalar field of this type, the equivalent of the Java SDK's
   * unprojected response models.
   */
  all(): Chain<TSelection, TFields & { __scalar: true }, TArgs>
  /** Selects the `__typename` meta field. */
  typename(): Chain<TSelection, TFields & { __typename: true }, TArgs>
}

export type Chain<TSelection, TFields = {}, TArgs = {}> = ArgMethods<
  TSelection,
  TFields,
  TArgs
> &
  FieldMethods<TSelection, TFields, TArgs> &
  ChainExtras<TSelection, TFields, TArgs> &
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
 * Creates a chain.
 *
 * Which kind of member is being called is decided from the call itself, which is
 * unambiguous for every generated schema member:
 *
 * - no argument            -> a scalar field, selected as `true`
 * - a function argument    -> an object field, recursed into
 * - any other argument     -> a field argument, collected into `__args`
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
