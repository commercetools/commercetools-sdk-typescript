/**
 * Categories - @commercetools/graphql-sdk
 *
 * The self-referencing part of the schema: a category has children which are categories
 * again, and ancestors which are categories again. Written twice, as a raw GraphQL string
 * and with the builder.
 *
 * The raw document has to spell every level out, and so do its hand written types. The
 * builder chains into the same type at each level and infers the rest.
 *
 * Run with:
 *   npx tsx examples/graphql/categories.ts
 */
import 'dotenv/config'
import { parse } from 'graphql'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { ClientBuilder } from '@commercetools/ts-client'
import { createGraphQLClient } from '@commercetools/graphql-sdk'
import type { TypedDocumentNode } from '@commercetools/graphql-sdk'

const projectKey = process.env.CTP_PROJECT_KEY!

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow({
    host: process.env.CTP_AUTH_URL!,
    projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
    },
  })
  .withHttpMiddleware({ host: process.env.CTP_API_URL! })
  .build()

const graphQL = createGraphQLClient(
  createApiBuilderFromCtpClient(client).withProjectKey({ projectKey })
)

// =========================================================================================
// 1. Raw GraphQL string
// =========================================================================================

type CategoryTreeData = {
  categories: {
    total: number
    results: Array<{
      id: string
      key?: string | null
      name: string
      childCount: number
      children?: Array<{
        id: string
        name: string
        childCount: number
        children?: Array<{ id: string; name: string }> | null
      }> | null
    }>
  }
}

type CategoryTreeVariables = { where?: string; limit?: number; locale?: string }

const CategoryTreeDocument = parse(`
  query CategoryTree($where: String, $limit: Int, $locale: Locale!) {
    categories(where: $where, limit: $limit, sort: ["orderHint asc"]) {
      total
      results {
        id
        key
        name(locale: $locale)
        childCount
        children {
          id
          name(locale: $locale)
          childCount
          children {
            id
            name(locale: $locale)
          }
        }
      }
    }
  }
`) as TypedDocumentNode<CategoryTreeData, CategoryTreeVariables>

async function raw() {
  const data = await graphQL
    .rawQuery(CategoryTreeDocument, {
      variables: { where: 'parent is not defined', limit: 10, locale: 'en' },
    })
    .executeOrThrow()

  console.log('\n--- raw ---')
  console.log(`root categories: ${data.categories.total}`)

  data.categories.results.forEach((root) => {
    console.log(`${root.name} (${root.childCount})`)
    root.children?.forEach((child) => {
      console.log(`  ${child.name} (${child.childCount})`)
      child.children?.forEach((grandchild) =>
        console.log(`    ${grandchild.name}`)
      )
    })
  })
}

// =========================================================================================
// 2. Schema derived builder
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      categories: (categories) =>
        categories
          .where('parent is not defined')
          .sort(['orderHint asc'])
          .limit(10)
          .total()
          .results((category) =>
            category
              .id()
              .key()
              .childCount()
              .name((name) => name.locale('en'))
              .children((child) =>
                child
                  .id()
                  .childCount()
                  .name((name) => name.locale('en'))
                  .children((grandchild) =>
                    grandchild.id().name((name) => name.locale('en'))
                  )
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- builder ---')
  console.log(`root categories: ${data.categories.total}`)

  data.categories.results.forEach((root) => {
    console.log(`${root.name} (${root.childCount})`)
    root.children?.forEach((child) => {
      console.log(`  ${child.name} (${child.childCount})`)
      child.children?.forEach((grandchild) =>
        console.log(`    ${grandchild.name}`)
      )
    })
  })

  // The result type is exact at every level. `childCount` was chained on the child but not
  // on the grandchild, so this is a compile error:
  //
  //   data.categories.results[0].children[0].children[0].childCount
}

// =========================================================================================
// 3. The other direction: ancestors, for a breadcrumb
// =========================================================================================

async function breadcrumb(key: string) {
  const data = await graphQL
    .query({
      category: (category) =>
        category
          .key(key)
          .id()
          .name((name) => name.locale('en'))
          .ancestors((ancestor) =>
            ancestor.id().name((name) => name.locale('en'))
          )
          .parent((parent) => parent.id().name((name) => name.locale('en'))),
    })
    .executeOrThrow()

  console.log('\n--- breadcrumb ---')

  if (!data.category) {
    console.log(`no category with key ${key}`)
    return
  }

  const trail = [
    ...data.category.ancestors.map((ancestor) => ancestor.name),
    data.category.name,
  ]

  console.log(trail.join(' > '))
  console.log('direct parent:', data.category.parent?.name ?? 'none')
}

// =========================================================================================
// 4. What each one sends
// =========================================================================================

function documents() {
  const rawBody = graphQL
    .rawQuery(CategoryTreeDocument, { variables: { limit: 10, locale: 'en' } })
    .requestBody()

  const builderBody = graphQL
    .query({
      categories: (categories) =>
        categories
          .limit(10)
          .results((category) =>
            category.id().name((name) => name.locale('en'))
          ),
    })
    .requestBody()

  console.log('\n--- documents ---')
  console.log('raw vars:    ', JSON.stringify(rawBody.variables))
  console.log('builder:     ', builderBody.query)
  console.log('builder vars:', JSON.stringify(builderBody.variables))
}

async function main() {
  documents()
  await raw()
  await builder()

  const key = process.env.CTP_CATEGORY_KEY

  if (key) {
    await breadcrumb(key)
  } else {
    console.log('\nset CTP_CATEGORY_KEY to run the breadcrumb example')
  }
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
