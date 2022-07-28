---
"@commercetools/platform-sdk": patch
---

### Platform API

#### Features

- add LocaleprojectingTrait, StoreprojectingTrait
- quotes to extension resource types
- support InventoryMode for cart line items

#### Fixes

- removed `localeProjection` & `priceSelection` parameter from PriceselectingTrait as they are not applying to all endpoints using price selection
