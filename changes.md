**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `key` to type `MyShoppingListAddLineItemAction`
- added property `key` to type `MyShoppingListAddTextLineItemAction`
- added property `textLineItemKey` to type `MyShoppingListChangeTextLineItemNameAction`
- added property `textLineItemKey` to type `MyShoppingListChangeTextLineItemQuantityAction`
- added property `lineItemKey` to type `MyShoppingListRemoveLineItemAction`
- added property `textLineItemKey` to type `MyShoppingListRemoveTextLineItemAction`
- added property `lineItemKey` to type `MyShoppingListSetLineItemCustomFieldAction`
- added property `textLineItemKey` to type `MyShoppingListSetTextLineItemCustomFieldAction`
- added property `textLineItemKey` to type `MyShoppingListSetTextLineItemCustomTypeAction`
- added property `textLineItemKey` to type `MyShoppingListSetTextLineItemDescriptionAction`
- added property `cart` to type `QuoteRequest`
- added property `key` to type `ShoppingListLineItem`
- added property `key` to type `ShoppingListLineItemDraft`
- added property `key` to type `TextLineItem`
- added property `key` to type `TextLineItemDraft`
- added property `key` to type `ShoppingListAddLineItemAction`
- added property `key` to type `ShoppingListAddTextLineItemAction`
- added property `lineItemKey` to type `ShoppingListChangeLineItemQuantityAction`
- added property `textLineItemKey` to type `ShoppingListChangeTextLineItemNameAction`
- added property `textLineItemKey` to type `ShoppingListChangeTextLineItemQuantityAction`
- added property `lineItemKey` to type `ShoppingListRemoveLineItemAction`
- added property `textLineItemKey` to type `ShoppingListRemoveTextLineItemAction`
- added property `lineItemKey` to type `ShoppingListSetLineItemCustomFieldAction`
- added property `lineItemKey` to type `ShoppingListSetLineItemCustomTypeAction`
- added property `textLineItemKey` to type `ShoppingListSetTextLineItemCustomFieldAction`
- added property `textLineItemKey` to type `ShoppingListSetTextLineItemCustomTypeAction`
- added property `textLineItemKey` to type `ShoppingListSetTextLineItemDescriptionAction`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `textLineItemId` of type `MyShoppingListChangeTextLineItemNameAction` to be optional
- changed property `textLineItemId` of type `MyShoppingListChangeTextLineItemQuantityAction` to be optional
- changed property `lineItemId` of type `MyShoppingListRemoveLineItemAction` to be optional
- changed property `textLineItemId` of type `MyShoppingListRemoveTextLineItemAction` to be optional
- changed property `lineItemId` of type `MyShoppingListSetLineItemCustomFieldAction` to be optional
- changed property `textLineItemId` of type `MyShoppingListSetTextLineItemCustomFieldAction` to be optional
- changed property `textLineItemId` of type `MyShoppingListSetTextLineItemCustomTypeAction` to be optional
- changed property `textLineItemId` of type `MyShoppingListSetTextLineItemDescriptionAction` to be optional
- changed property `lineItemId` of type `ShoppingListChangeLineItemQuantityAction` to be optional
- changed property `textLineItemId` of type `ShoppingListChangeTextLineItemNameAction` to be optional
- changed property `textLineItemId` of type `ShoppingListChangeTextLineItemQuantityAction` to be optional
- changed property `lineItemId` of type `ShoppingListRemoveLineItemAction` to be optional
- changed property `textLineItemId` of type `ShoppingListRemoveTextLineItemAction` to be optional
- changed property `lineItemId` of type `ShoppingListSetLineItemCustomFieldAction` to be optional
- changed property `lineItemId` of type `ShoppingListSetLineItemCustomTypeAction` to be optional
- changed property `textLineItemId` of type `ShoppingListSetTextLineItemCustomFieldAction` to be optional
- changed property `textLineItemId` of type `ShoppingListSetTextLineItemCustomTypeAction` to be optional
- changed property `textLineItemId` of type `ShoppingListSetTextLineItemDescriptionAction` to be optional
</details>

**Import changes**

<details>
<summary>Added Property(s)</summary>

- added property `canceled` to type `OperationStates`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `canceled` to type `ProcessingState`
</details>

**History changes**

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `associateId` to method `get /{projectKey}`
- added query parameter `associateId` to method `get /{projectKey}/{resourceType}`
- added query parameter `associateId` to method `get /{projectKey}/{resourceType}/{ID}`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `associate` to type `ModifiedBy`
</details>
