**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `shippingKey` to type `CartSetLineItemTaxAmountAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/cart/updates/CartSetLineItemTaxAmountAction.raml:12:2)
- added property `shippingKey` to type `CartSetLineItemTaxRateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/cart/updates/CartSetLineItemTaxRateAction.raml:12:2)
- added property `shippingKey` to type `StagedOrderSetLineItemTaxAmountAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/order-edit/updates/StagedOrderSetLineItemTaxAmountAction.raml:12:2)
- added property `shippingKey` to type `StagedOrderSetLineItemTaxRateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/order-edit/updates/StagedOrderSetLineItemTaxRateAction.raml:12:2)
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AttributeGroup` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:6:0)
- added type `AttributeGroupDraft` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:7:0)
- added type `AttributeGroupPagedQueryResponse` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:8:0)
- added type `AttributeGroupReference` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:9:0)
- added type `AttributeGroupResourceIdentifier` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:10:0)
- added type `AttributeGroupUpdate` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:11:0)
- added type `AttributeGroupUpdateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:12:0)
- added type `AttributeReference` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:13:0)
- added type `AttributeGroupAddAttributeAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:14:0)
- added type `AttributeGroupChangeNameAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:15:0)
- added type `AttributeGroupRemoveAttributeAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:16:0)
- added type `AttributeGroupSetAttributesAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:17:0)
- added type `AttributeGroupSetDescriptionAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:18:0)
- added type `AttributeGroupSetKeyAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:19:0)
</details>

<details>
<summary>Changed Type(s)</summary>

- marked type `ShippingMethodSetDescriptionAction` as deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1512:0)
</details>

<details>
<summary>Added Method(s)</summary>

- added method `get /{projectKey}/attribute-groups` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:11:0)
- added method `post /{projectKey}/attribute-groups` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:25:0)
- added method `get /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:49:2)
- added method `post /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:63:2)
- added method `delete /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:80:2)
- added method `get /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:101:2)
- added method `post /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:115:2)
- added method `delete /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:132:2)
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/attribute-groups` (file:///home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/api.raml:216:2)
- added resource `/{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:42:0)
- added resource `/{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:94:0)
</details>
