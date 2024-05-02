**Api changes**

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `custom` of type `MyBusinessUnitDraft` from type `CustomFields` to `CustomFieldsDraft`
- :warning: changed property `custom` of type `MyCompanyDraft` from type `CustomFields` to `CustomFieldsDraft`
- :warning: changed property `custom` of type `MyDivisionDraft` from type `CustomFields` to `CustomFieldsDraft`
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `stores` of type `BusinessUnit` to be required
- :warning: changed property `stores` of type `Company` to be required
- :warning: changed property `stores` of type `Division` to be required
- :warning: changed property `stores` of type `BusinessUnitSetStoresAction` to be required
- :warning: changed property `stores` of type `CartDiscountSetStoresAction` to be required
- :warning: changed property `stores` of type `Customer` to be required
- :warning: changed property `stores` of type `CustomerSetStoresAction` to be required
</details>

<details>
<summary>Added Property(s)</summary>

- added property `postFilter` to type `ProductSearchRequest`
</details>

**Import changes**

<details>
<summary>MarkDeprecated Property(s)</summary>

- marked property `PriceImport::publish` as deprecated
- marked property `ProductVariantImport::publish` as deprecated
</details>

<details>
<summary>Added Property(s)</summary>

- added property `staged` to type `PriceImport`
- added property `staged` to type `ProductVariantImport`
</details>
