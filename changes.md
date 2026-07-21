**Api changes**

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().mcpServers().get()`
- added method `apiRoot.withProjectKey().mcpServers().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withKey().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withId().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withId().head()`
- added method `apiRoot.withProjectKey().mcpServers().types().get()`
- added method `apiRoot.withProjectKey().mcpServers().withKey().get()`
- added method `apiRoot.withProjectKey().mcpServers().withKey().post()`
- added method `apiRoot.withProjectKey().mcpServers().withKey().delete()`
- added method `apiRoot.withProjectKey().mcpServers().withId().get()`
- added method `apiRoot.withProjectKey().mcpServers().withId().post()`
- added method `apiRoot.withProjectKey().mcpServers().withId().delete()`
- added method `apiRoot.withProjectKey().mcpServers().types().withMcpServerType().get()`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `stores` to type `DiscountCode`

</details>

<details>
<summary>Added Type(s)</summary>

- added type `OverlappingPriceValidityError`
- added type `UnauthorizedError`
- added type `GraphQLOverlappingPriceValidityError`
- added type `GraphQLUnauthorizedError`
- added type `CommerceMcpServerConfig`
- added type `CommerceMcpServerConfigDraft`
- added type `McpServer`
- added type `McpServerConfig`
- added type `McpServerConfigDraft`
- added type `McpServerDraft`
- added type `McpServerJsonOutputFiltering`
- added type `McpServerJsonOutputFilteringMatcher`
- added type `McpServerPagedQueryResponse`
- added type `McpServerState`
- added type `McpServerTool`
- added type `McpServerToolOutputFormatting`
- added type `McpServerType`
- added type `McpServerTypeTool`
- added type `McpServerUpdate`
- added type `McpServerUpdateAction`
- added type `ParameterOverride`
- added type `RemoveToolCustomizationTarget`
- added type `ToolCustomization`
- added type `McpServerAddToolAction`
- added type `McpServerAddToolCustomizationAction`
- added type `McpServerRemoveToolAction`
- added type `McpServerRemoveToolCustomizationAction`
- added type `McpServerSetDescriptionAction`
- added type `McpServerSetJsonOutputFilteringAction`
- added type `McpServerSetNameAction`
- added type `McpServerSetStateAction`
- added type `McpServerSetToolCustomizationsAction`
- added type `McpServerSetToolOutputFormattingAction`
- added type `McpServerSetToolsAction`

</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `variant` to type `AttributeReferenceTypeId`
- added enum `variant` to type `CustomFieldReferenceValue`

</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/mcp-servers`
- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes`
- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes/key={key}`
- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes/{ID}`
- added resource `/{projectKey}/mcp-servers/types`
- added resource `/{projectKey}/mcp-servers/key={key}`
- added resource `/{projectKey}/mcp-servers/{ID}`
- added resource `/{projectKey}/mcp-servers/types/{mcpServerType}`

</details>

**History changes**

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `withTotal` to method `get /{projectKey}`
- added query parameter `withTotal` to method `get /{projectKey}/{resourceType}`
- added query parameter `withTotal` to method `get /{projectKey}/{resourceType}/{ID}`

</details>

<details>
<summary>Required Property(s)</summary>

- changed property `total` of type `RecordPagedQueryResponse` to be optional

</details>
