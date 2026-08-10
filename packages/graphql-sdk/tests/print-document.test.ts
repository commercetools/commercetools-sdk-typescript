import { parse } from 'graphql'
import { printDocument, toGraphQLRequestBody } from '../src'

const source = `query ProductIds {
  products {
    results {
      id
    }
  }
}`

describe('printDocument', () => {
  it('returns a query string unchanged', () => {
    expect(printDocument(source)).toBe(source)
  })

  it('prints a DocumentNode to its source text', () => {
    expect(printDocument(parse(source))).toBe(source)
  })

  it('keeps fragment definitions that a document carries', () => {
    const document = parse(`query P { products { results { ...productId } } }
      fragment productId on Product { id }`)

    const printed = printDocument(document)

    expect(printed).toContain('...productId')
    expect(printed).toContain('fragment productId on Product')
  })

  it('caches the printed output per document', () => {
    const document = parse(source)

    expect(printDocument(document)).toBe(printDocument(document))
  })

  it('stringifies string-like documents such as the codegen client preset output', () => {
    class TypedDocumentString extends String {
      constructor(private readonly value: string) {
        super(value)
      }

      toString(): string {
        return this.value
      }
    }

    expect(printDocument(new TypedDocumentString(source))).toBe(source)
  })

  it('rejects values that are neither a document nor a string', () => {
    expect(() => printDocument(42 as any)).toThrow(TypeError)
    expect(() => printDocument(null as any)).toThrow(TypeError)
    expect(() => printDocument({ query: source } as any)).toThrow(
      /neither a `DocumentNode` nor string-like/
    )
  })
})

describe('toGraphQLRequestBody', () => {
  it('only sets the query when no options are given', () => {
    expect(toGraphQLRequestBody(source)).toEqual({ query: source })
  })

  it('omits variables and operationName when they are undefined', () => {
    const body = toGraphQLRequestBody(source, {
      variables: undefined,
      operationName: undefined,
    })

    expect(Object.keys(body)).toEqual(['query'])
  })

  it('includes variables and operationName when given', () => {
    expect(
      toGraphQLRequestBody(source, {
        variables: { limit: 20 },
        operationName: 'ProductIds',
      })
    ).toEqual({
      query: source,
      operationName: 'ProductIds',
      variables: { limit: 20 },
    })
  })
})
