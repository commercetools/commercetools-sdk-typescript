**Api changes**

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `sort` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `limit` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `offset` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `withTotal` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `expand` to method `post /{projectKey}/in-store/key={storeKey}/cart-discounts`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `AttributeReferenceTypeId`
- added enum `business-unit` to type `AttributeReferenceTypeId`
- added enum `cart-discount` to type `AttributeReferenceTypeId`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
</details>

**History changes**

<details>
<summary>Added Type(s)</summary>

- added type `AttributeLocalizedEnumValue`
- added type `AttributePlainEnumValue`
- added type `ChannelRoleEnum`
- added type `StateRoleEnum`
- added type `StateTypeEnum`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `ChannelRole`
- :warning: removed type `StateRole`
- :warning: removed type `StateType`
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `previousValue` from type `AddAddressChange`
- :warning: removed property `previousValue` from type `AddLocationChange`
- :warning: removed property `nextValue` from type `RemoveLocationChange`
- :warning: removed property `nextValue` from type `RemoveTaxRateChange`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `previousValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `AddLocalizedEnumValueChange` from type `LocalizedEnumValue` to `AttributeLocalizedEnumValue`
- :warning: changed property `nextValue` of type `AddPlainEnumValueChange` from type `EnumValue` to `AttributePlainEnumValue`
- :warning: changed property `previousValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `previousValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
- :warning: changed property `nextValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
- :warning: changed property `previousValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `previousValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `previousValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `nextValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
- :warning: changed property `previousValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
- :warning: changed property `nextValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
</details>
