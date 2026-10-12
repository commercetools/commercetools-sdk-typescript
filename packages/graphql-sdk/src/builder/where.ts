/**
 * A fluent builder for the [Query Predicate](https://docs.commercetools.com/api/predicates/query)
 * that the `where` argument takes.
 *
 * It is derived from the response types genql already generates, so there is no second artefact
 * to keep in step with the schema.
 *
 * It is entirely optional. `where` keeps taking a predicate string, which stays the escape hatch
 * for anything this builder does not express:
 *
 * ```ts
 * customers.where('firstName="Martha"')
 * customers.where((customer) => customer.firstName.is('Martha'))
 * ```
 */

import type { Geometry } from './generated'

/** Marker making a built predicate distinguishable from any other object. */
declare const PREDICATE: unique symbol

/** The predicate string carried by a {@link Predicate}, read back by {@link resolveWhere}. */
const SOURCE = Symbol.for('@commercetools/graphql-sdk/predicate-source')

/**
 * A built predicate. Combine with {@link Predicate.and}, {@link Predicate.or} and {@link not},
 * or read the predicate string off it with `String(predicate)`.
 */
export interface Predicate {
  readonly [PREDICATE]?: true
  /** `(this) and (other)` */
  and(...others: Predicate[]): Predicate
  /** `(this) or (other)` */
  or(...others: Predicate[]): Predicate
  /** The predicate string, which is what ends up in the `where` argument. */
  toString(): string
}

function predicate(source: string): Predicate {
  return {
    [SOURCE]: source,
    and: (...others: Predicate[]) => combine('and', source, others),
    or: (...others: Predicate[]) => combine('or', source, others),
    toString: () => source,
  } as unknown as Predicate
}

/**
 * Every operand is parenthesised. `a and b or c` groups differently depending on the reader, so
 * the emitted predicate says which grouping was meant instead of relying on precedence.
 */
function combine(
  operator: 'and' | 'or',
  source: string,
  others: Predicate[]
): Predicate {
  return predicate(
    [source, ...others.map(sourceOf)]
      .map((part) => `(${part})`)
      .join(` ${operator} `)
  )
}

/** `not (...)`, the negation of any other predicate. */
export function not(inner: Predicate): Predicate {
  return predicate(`not (${sourceOf(inner)})`)
}

function sourceOf(value: unknown): string {
  const source = (value as Record<symbol, unknown> | null)?.[SOURCE]

  if (typeof source !== 'string') {
    throw new TypeError(
      'A `where` callback must return a predicate, for example `customer => customer.firstName.is("Martha")`.'
    )
  }

  return source
}

// ----------------------------------------------------------------- the values

type Literal = string | number | boolean

/**
 * Predicate values are literals in the predicate string itself, so a string carrying a quote or
 * a backslash has to be escaped rather than passed through.
 */
function literal(value: Literal): string {
  return typeof value === 'string'
    ? `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
    : String(value)
}

// ------------------------------------------------------------- the leaf types

/** Available on every field, whatever its type. */
export interface Defined {
  /** `field is defined` */
  isDefined(): Predicate
  /** `field is not defined` */
  isNotDefined(): Predicate
}

/** Available on every collection field. */
export interface Emptiable extends Defined {
  /** `field is empty` */
  isEmpty(): Predicate
  /** `field is not empty` */
  isNotEmpty(): Predicate
}

export interface Equality<TValue> extends Defined {
  /** `field = value`. An exact match, never a substring match. */
  is(value: TValue): Predicate
  /** `field != value` */
  isNot(value: TValue): Predicate
  /** `field in (a, b)`, which is markedly cheaper than chaining `or`. */
  isIn(values: readonly TValue[]): Predicate
  /** `field not in (a, b)` */
  isNotIn(values: readonly TValue[]): Predicate
}

export interface Comparable<TValue> extends Equality<TValue> {
  /** `field < value` */
  isLessThan(value: TValue): Predicate
  /** `field <= value` */
  isLessThanOrEqual(value: TValue): Predicate
  /** `field > value` */
  isGreaterThan(value: TValue): Predicate
  /** `field >= value` */
  isGreaterThanOrEqual(value: TValue): Predicate
}

export interface CollectionOf<TValue> extends Emptiable {
  /** `field contains all (a, b)` */
  containsAll(values: readonly TValue[]): Predicate
  /** `field contains any (a, b)` */
  containsAny(values: readonly TValue[]): Predicate
}

/**
 * A localized field. Predicates address the locales of a `LocalizedString` directly, as in
 * `name(en = "Peter")`, so this is not a plain string field.
 */
export interface Localized {
  /** `field(<locale> = value)`, for example `name(en = "Peter")` */
  locale(locale: string): Equality<string>
}

/**
 * A field the schema types as `Json`, such as an Attribute or Custom Field value. The API
 * compares it against whatever the field actually holds, so every literal is accepted, and the
 * value is descended into when what it holds is an object.
 *
 * The names inside such a value are not in the schema, so they cannot be checked the way the
 * fields of a resource are. Every one of them is again an {@link AnyValue}.
 */
export interface JsonFields {
  readonly [name: string]: AnyValue
}

/**
 * A field the schema types as `Json`, such as an Attribute or Custom Field value. The API
 * compares it against whatever the field actually holds, so every literal is accepted.
 *
 * Values that hold an object are descended into, which is how a Money, Enum or Reference
 * Attribute is addressed:
 *
 * ```ts
 * variant.attributes((a) =>
 *   a.name
 *     .is('price')
 *     .and(a.value((v) => v.centAmount.is(999).and(v.currencyCode.is('EUR'))))
 * )
 * ```
 *
 * @see https://docs.commercetools.com/api/predicates/query#on-attributes
 */
export interface AnyValue extends Comparable<Literal>, Localized {
  /** `field(<inner>)`, for example `value(centAmount = 999 and currencyCode = "EUR")`. */
  (select: (value: JsonFields) => Predicate): Predicate
}

/**
 * A GeoJSON field, which a predicate compares only against a circle. The two first parameters
 * are the longitude and the latitude of its centre, the third its radius in metres.
 *
 * The API does not support this inside an `or`, and orders the results by distance.
 *
 * @see https://docs.commercetools.com/api/predicates/query#query-predicates-by-example
 */
export interface GeoLocation extends Defined {
  /** `field within circle(longitude, latitude, radius)` */
  withinCircle(
    longitude: number,
    latitude: number,
    radiusInMeters: number
  ): Predicate
}

/**
 * A reference field. Inside a predicate a Reference exposes only `id` and `typeId`, and a
 * KeyReference only `key` and `typeId`, never the fields of the resource being pointed at.
 *
 * @see https://docs.commercetools.com/api/predicates/query#references-in-query-predicates
 */
export type ReferencePredicate<TReference> = {
  readonly [TField in Exclude<keyof TReference, '__typename'>]: Equality<
    Extract<TReference[TField], string>
  >
}

/** `custom(fields(<name> = value))`, the predicate form of Custom Fields. */
export interface CustomFields {
  /**
   * `custom(fields(<name> = value))`, where `name` is the name in the FieldDefinition.
   *
   * The schema exposes Custom Fields as untyped name/value pairs, so the field name is a
   * string here rather than a member of this type.
   */
  field(name: string): AnyValue
}

// ------------------------------------------------------------ field selection

type Nullable<T> = Exclude<T, null | undefined>

type ElementOf<T> = T extends readonly (infer TItem)[] ? TItem : T

/**
 * genql renames a handful of fields that carry a payload the GraphQL schema cannot type, and
 * the predicate has to use the name from the REST representation it is evaluated against.
 * `attributesRaw` is `attributes` in `variants(attributes(name = "color" and value = "red"))`.
 */
interface PredicateNames {
  attributesRaw: 'attributes'
  interfaceInteractionsRaw: 'interfaceInteractions'
}

type PredicateName<TField> = TField extends keyof PredicateNames
  ? PredicateNames[TField]
  : TField

const PREDICATE_NAMES: Record<string, string> = {
  attributesRaw: 'attributes',
  interfaceInteractionsRaw: 'interfaceInteractions',
}

/**
 * Fields the schema only exposes to make querying convenient. `nameAllLocales` is the projection
 * of a localized `name`, `customerGroupRef` the unresolved form of `customerGroup`, and
 * `customFieldsRaw` is reached through {@link CustomFields.field} instead. None of the three is
 * addressable in a predicate.
 */
type Hidden<TResource> = Extract<
  keyof TResource,
  | '__typename'
  | 'customFieldsRaw'
  | `${string}AllLocales`
  | `${string}Ref`
  | `${string}Refs`
>

/** `nameAllLocales` next to `name` is how the schema marks `name` as localized. */
type IsLocalized<
  TResource,
  TField extends string,
> = `${TField}AllLocales` extends keyof TResource ? true : false

/** `customerGroupRef` next to `customerGroup`, `storesRef` next to `stores`. */
type ReferenceFieldOf<
  TResource,
  TField extends string,
> = `${TField}Ref` extends keyof TResource
  ? `${TField}Ref`
  : `${TField}Refs` extends keyof TResource
    ? `${TField}Refs`
    : never

/** The `Reference` or `KeyReference` a field resolves from, if it resolves from one. */
type ReferenceTargetOf<TResource, TField extends string> = [
  ReferenceFieldOf<TResource, TField>,
] extends [never]
  ? never
  : ElementOf<
      Nullable<TResource[ReferenceFieldOf<TResource, TField> & keyof TResource]>
    >

/**
 * A leaf is a field a predicate compares against a literal. An object field has none of these
 * operators, which is what tells the two apart.
 */
type LeafFor<TValue> = [TValue] extends [never]
  ? never
  : unknown extends TValue
    ? AnyValue
    : [TValue] extends [boolean]
      ? Equality<boolean>
      : [TValue] extends [number]
        ? Comparable<number>
        : [TValue] extends [string]
          ? Comparable<string>
          : never

/**
 * An object is descended into by calling the field with a callback, mirroring the parentheses
 * of `addresses(city = "Berlin")`. `isDefined()` stays available on the field itself.
 */
type ObjectField<TObject> = ((
  select: (nested: ResourcePredicate<TObject>) => Predicate
) => Predicate) &
  Defined

type ObjectArrayField<TItem> = ((
  select: (item: ResourcePredicate<TItem>) => Predicate
) => Predicate) &
  Emptiable

type ReferenceField<TReference> = ((
  select: (reference: ReferencePredicate<TReference>) => Predicate
) => Predicate) &
  Defined

/**
 * What a `where` callback, and every nested one, receives: the predicate members of a resource,
 * plus {@link CustomFields.field} on the Custom Fields container the schema cannot type.
 */
export type ResourcePredicate<TResource> = PredicateRoot<TResource> &
  ('customFieldsRaw' extends keyof TResource ? CustomFields : {})

type PlainFieldFor<TResource, TField extends keyof TResource> =
  Nullable<TResource[TField]> extends readonly (infer TItem)[]
    ? [LeafFor<TItem>] extends [never]
      ? ObjectArrayField<TItem>
      : CollectionOf<TItem>
    : [LeafFor<Nullable<TResource[TField]>>] extends [never]
      ? ObjectField<Nullable<TResource[TField]>>
      : LeafFor<Nullable<TResource[TField]>>

type FieldFor<TResource, TField extends keyof TResource & string> =
  IsLocalized<TResource, TField> extends true
    ? Localized
    : [Nullable<TResource[TField]>] extends [Geometry]
      ? GeoLocation
      : [ReferenceTargetOf<TResource, TField>] extends [never]
        ? PlainFieldFor<TResource, TField>
        : ReferenceField<ReferenceTargetOf<TResource, TField>>

/**
 * The predicate members of a resource: one per field of its response representation, typed by
 * what that field holds.
 */
export type PredicateRoot<TResource> = {
  readonly [
    TField in Extract<
      Exclude<keyof TResource, Hidden<TResource>>,
      string
    > as PredicateName<TField>
  ]: FieldFor<TResource, TField>
}

/** The resource a `where` predicate filters over: the element type of `results`. */
export type WhereResourceOf<TResult> =
  Nullable<TResult> extends { results: readonly (infer TItem)[] }
    ? TItem
    : never

/** The callback form of `where`, as opposed to a predicate string. */
export type WhereBuilder<TResult> = (
  resource: ResourcePredicate<WhereResourceOf<TResult>>
) => Predicate

/** Whether a `where` on this result type can offer the builder at all. */
export type HasWhereResource<TResult> = [WhereResourceOf<TResult>] extends [
  never,
]
  ? false
  : true

// ------------------------------------------------------------------ the runtime

/**
 * One field: the operators it can be compared with, and the descent into whatever it holds.
 * `wrap` is how the expression is embedded in its parent, which is what turns `en = "Peter"`
 * into `name(en = "Peter")` for a localized field.
 *
 * The result is callable because descending is a call, `addresses(city = "Berlin")`. Which of
 * the two a field allows is decided by the type; at run time both are always here, since the
 * names inside a value the schema types as `Json` are not known until they are used.
 */
function leaf(
  subject: string,
  wrap: (expression: string) => string = (expression) => expression
): any {
  const binary = (operator: string) => (value: Literal) =>
    predicate(wrap(`${subject} ${operator} ${literal(value)}`))

  const set = (operator: string) => (values: readonly Literal[]) =>
    predicate(
      wrap(`${subject} ${operator} (${values.map(literal).join(', ')})`)
    )

  const bare = (suffix: string) => () => predicate(wrap(`${subject} ${suffix}`))

  const descend = (select: (inner: unknown) => Predicate) =>
    predicate(wrap(`${subject}(${sourceOf(select(createPredicateRoot()))})`))

  return Object.assign(descend, {
    is: binary('='),
    isNot: binary('!='),
    isLessThan: binary('<'),
    isLessThanOrEqual: binary('<='),
    isGreaterThan: binary('>'),
    isGreaterThanOrEqual: binary('>='),
    isIn: set('in'),
    isNotIn: set('not in'),
    containsAll: set('contains all'),
    containsAny: set('contains any'),
    isEmpty: bare('is empty'),
    isNotEmpty: bare('is not empty'),
    isDefined: bare('is defined'),
    isNotDefined: bare('is not defined'),
    locale: (locale: string) =>
      leaf(locale, (expression) => `${subject}(${expression})`),
    withinCircle: (
      longitude: number,
      latitude: number,
      radiusInMeters: number
    ) =>
      predicate(
        wrap(
          `${subject} within circle(${longitude}, ${latitude}, ${radiusInMeters})`
        )
      ),
  })
}

/**
 * Creates the object a `where` callback receives.
 *
 * Which kind of member is being used is decided from the call itself, the same way the
 * projection chain decides it:
 *
 * - `field.is(value)`   -> a leaf, compared against a literal
 * - `field(inner)`      -> an object, array or reference, descended into
 * - `field('name')`     -> {@link CustomFields.field}, the one member taking a field name
 */
export function createPredicateRoot(): any {
  return new Proxy(
    {},
    {
      get(_target, property) {
        if (typeof property !== 'string') {
          return undefined
        }

        if (property === 'field') {
          return (name: string) =>
            leaf(name, (expression) => `fields(${expression})`)
        }

        return leaf(PREDICATE_NAMES[property] ?? property)
      },
    }
  )
}

/** Runs a `where` callback and returns the predicate string it built. */
export function resolveWhere(build: (resource: any) => Predicate): string {
  return sourceOf(build(createPredicateRoot()))
}
