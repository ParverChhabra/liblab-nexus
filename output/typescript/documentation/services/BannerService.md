# BannerService

A list of all methods in the `BannerService` service. Click on the method name to view detailed information about that method.

| Methods                                                                         | Description |
| :------------------------------------------------------------------------------ | :---------- |
| [bannerControllerGetBannersByLocale](#bannercontrollergetbannersbylocale)       |             |
| [bannerControllerGetBannersForClientId](#bannercontrollergetbannersforclientid) |             |
| [bannerControllerGet](#bannercontrollerget)                                     |             |
| [bannerControllerUpdate](#bannercontrollerupdate)                               |             |
| [bannerControllerRemove](#bannercontrollerremove)                               |             |
| [bannerControllerCreate](#bannercontrollercreate)                               |             |
| [bannerControllerCreateDefaultBanner](#bannercontrollercreatedefaultbanner)     |             |
| [bannerControllerAttachDefaultBanners](#bannercontrollerattachdefaultbanners)   |             |
| [bannerControllerAddBannerVariant](#bannercontrolleraddbannervariant)           |             |
| [bannerControllerUpdateSortOrder](#bannercontrollerupdatesortorder)             |             |

## bannerControllerGetBannersByLocale

- HTTP Method: `GET`
- Endpoint: `/v2/banner/client/{clientId}/locale/{locale}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| locale | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.banner.bannerControllerGetBannersByLocale('locale');

  console.log(data);
})();
```

## bannerControllerGetBannersForClientId

- HTTP Method: `GET`
- Endpoint: `/v2/banner/client/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.banner.bannerControllerGetBannersForClientId();

  console.log(data);
})();
```

## bannerControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/banner/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.banner.bannerControllerGet();

  console.log(data);
})();
```

## bannerControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/banner/{id}`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateBannerRequest](../models/UpdateBannerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateBannerRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateBannerRequest: UpdateBannerRequest = {
    hidden: true,
    type: 'type',
    bannerVariants: ['bannerVariants'],
  };

  const { data } = await pocSdk.banner.bannerControllerUpdate(updateBannerRequest);

  console.log(data);
})();
```

## bannerControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/banner/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.banner.bannerControllerRemove();

  console.log(data);
})();
```

## bannerControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/banner`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [CreateBannerRequest](../models/CreateBannerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateBannerRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createBannerRequest: CreateBannerRequest = {
    clientId: {},
    type: 'type',
    hidden: {},
    bannerVariants: ['bannerVariants'],
  };

  const { data } = await pocSdk.banner.bannerControllerCreate(createBannerRequest);

  console.log(data);
})();
```

## bannerControllerCreateDefaultBanner

- HTTP Method: `POST`
- Endpoint: `/v2/banner/default`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateDefaultBannerRequest](../models/CreateDefaultBannerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateDefaultBannerRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createDefaultBannerRequest: CreateDefaultBannerRequest = {
    hidden: {},
    type: 'type',
    bannerVariants: ['bannerVariants'],
  };

  const { data } = await pocSdk.banner.bannerControllerCreateDefaultBanner(createDefaultBannerRequest);

  console.log(data);
})();
```

## bannerControllerAttachDefaultBanners

- HTTP Method: `POST`
- Endpoint: `/v2/banner/attach-default/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.banner.bannerControllerAttachDefaultBanners();

  console.log(data);
})();
```

## bannerControllerAddBannerVariant

- HTTP Method: `POST`
- Endpoint: `/v2/banner/{bannerId}/variant`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateBannerVariantRequest](../models/CreateBannerVariantRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateBannerVariantRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createBannerVariantRequest: CreateBannerVariantRequest = {
    locale: 'locale',
    dWebUrl: 'dWebUrl',
    mWebUrl: 'mWebUrl',
    link: 'link',
  };

  const { data } = await pocSdk.banner.bannerControllerAddBannerVariant(createBannerVariantRequest);

  console.log(data);
})();
```

## bannerControllerUpdateSortOrder

- HTTP Method: `PUT`
- Endpoint: `/v2/banner/client/{clientId}/sort-order`

**Parameters**

| Name | Type | Required | Description       |
| :--- | :--- | :------- | :---------------- |
| body | any  | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.banner.bannerControllerUpdateSortOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
