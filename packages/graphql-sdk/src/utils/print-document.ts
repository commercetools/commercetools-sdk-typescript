import type { DocumentNode } from 'graphql'
import { print } from 'graphql'
import type {
  GraphQLDocument,
  GraphQLRequestBody,
  GraphQLRequestOptions,
} from '../types/types'

/**
 * Printing an AST is not free and documents are usually module level constants that get
 * executed many times, so the source text is cached per document object.
 */
const printedDocuments = new WeakMap<object, string>()

function isDocumentNode(document: object): document is DocumentNode {
  return (document as DocumentNode).kind === 'Document'
}

/**
 * Returns the GraphQL source text of a document.
 *
 * Accepts a plain string, a `DocumentNode`/`TypedDocumentNode` (printed through `graphql`),
 * or a string-like document such as the one emitted by the codegen client preset.
 */
export function printDocument(document: GraphQLDocument<any, any>): string {
  if (typeof document === 'string') {
    return document
  }

  if (document === null || typeof document !== 'object') {
    throw new TypeError(
      `Expected a GraphQL document or a query string, but received \`${typeof document}\`.`
    )
  }

  const cached = printedDocuments.get(document)
  if (cached !== undefined) {
    return cached
  }

  const printed = isDocumentNode(document)
    ? print(document)
    : printStringLike(document)

  printedDocuments.set(document, printed)
  return printed
}

function printStringLike(document: object): string {
  const hasOwnToString =
    typeof (document as any).toString === 'function' &&
    (document as any).toString !== Object.prototype.toString

  if (!hasOwnToString) {
    throw new TypeError(
      'Expected a GraphQL document or a query string, but received an object that is neither a `DocumentNode` nor string-like.'
    )
  }

  return String(document)
}

/**
 * Builds the request body for the GraphQL endpoint.
 *
 * Exported so that the body can also be handed to the generated request builder directly,
 * for example `apiRoot.graphql().post({ body: toGraphQLRequestBody(document, { variables }) })`.
 */
export function toGraphQLRequestBody<TData, TVariables>(
  document: GraphQLDocument<TData, TVariables>,
  options?: GraphQLRequestOptions<TVariables>
): GraphQLRequestBody<TVariables> {
  const body: GraphQLRequestBody<TVariables> = {
    query: printDocument(document),
  }

  if (options?.operationName !== undefined) {
    body.operationName = options.operationName
  }

  if (options?.variables !== undefined) {
    body.variables = options.variables
  }

  return body
}
