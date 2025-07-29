# ActivityPartnerService

A list of all methods in the `ActivityPartnerService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                   | Description |
| :-------------------------------------------------------------------------------------------------------- | :---------- |
| [activityPartnerControllerList](#activitypartnercontrollerlist)                                           |             |
| [activityPartnerControllerCreate](#activitypartnercontrollercreate)                                       |             |
| [activityPartnerControllerAttachDefaultPartnerToAll](#activitypartnercontrollerattachdefaultpartnertoall) |             |
| [activityPartnerControllerAttachDefaultPartner](#activitypartnercontrollerattachdefaultpartner)           |             |
| [activityPartnerControllerGet](#activitypartnercontrollerget)                                             |             |
| [activityPartnerControllerUpdate](#activitypartnercontrollerupdate)                                       |             |
| [activityPartnerControllerDelete](#activitypartnercontrollerdelete)                                       |             |
| [activityPartnerControllerGetAvailableVariants](#activitypartnercontrollergetavailablevariants)           |             |
| [activityPartnerControllerDisable](#activitypartnercontrollerdisable)                                     |             |
| [activityPartnerControllerDisableVariant](#activitypartnercontrollerdisablevariant)                       |             |
| [activityPartnerControllerAddVariants](#activitypartnercontrolleraddvariants)                             |             |

## activityPartnerControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/activity-partner`

**Parameters**

| Name                  | Type     | Required | Description |
| :-------------------- | :------- | :------- | :---------- |
| partnerLanguages      | string[] | ❌       |             |
| isBenevity            | boolean  | ❌       |             |
| partnerImpactLocation | string[] | ❌       |             |
| partnerFocusArea      | string[] | ❌       |             |
| partnerCity           | string[] | ❌       |             |
| partnerCountryId      | string[] | ❌       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerList({
    partnerLanguages: ['partnerLanguages'],
    isBenevity: true,
    partnerImpactLocation: ['partnerImpactLocation'],
    partnerFocusArea: ['partnerFocusArea'],
    partnerCity: ['partnerCity'],
    partnerCountryId: ['partnerCountryId'],
  });

  console.log(data);
})();
```

## activityPartnerControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateActivityPartnerRequest](../models/CreateActivityPartnerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateActivityPartnerAddressRequest, CreateActivityPartnerRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createActivityPartnerAddressRequest: CreateActivityPartnerAddressRequest = {
    line1: 'line1',
    line2: 'line2',
    recipientName: 'recipientName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    isdCode: 'isdCode',
    title: 'title',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    country: 'country',
    countryCode: 'countryCode',
    url: 'url',
    metadata: {},
  };

  const createActivityPartnerRequest: CreateActivityPartnerRequest = {
    partnerId: 'partnerId',
    activityId: 'activityId',
    impact: 'impact',
    cost: 9.79,
    bnfLanguage: 'bnfLanguage',
    bnfLocation: 'bnfLocation',
    countryId: 'countryId',
    cityId: 'cityId',
    address: createActivityPartnerAddressRequest,
    thumbnailUrl: 'thumbnailUrl',
    variantIds: ['variantIds'],
  };

  const { data } = await pocSdk.activityPartner.activityPartnerControllerCreate(createActivityPartnerRequest);

  console.log(data);
})();
```

## activityPartnerControllerAttachDefaultPartnerToAll

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner/activity/attach-default`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerAttachDefaultPartnerToAll();

  console.log(data);
})();
```

## activityPartnerControllerAttachDefaultPartner

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner/activity/{activityId}/attach-default`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| activityId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerAttachDefaultPartner('activityId');

  console.log(data);
})();
```

## activityPartnerControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/activity-partner/{id}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerGet('id');

  console.log(data);
})();
```

## activityPartnerControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/activity-partner/{id}`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateActivityPartnerRequest](../models/UpdateActivityPartnerRequest.md) | ✅       | The request body. |
| id   | string                                                                    | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateActivityPartnerAddressRequest, UpdateActivityPartnerRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateActivityPartnerAddressRequest: UpdateActivityPartnerAddressRequest = {
    id: 'id',
    line1: 'line1',
    line2: 'line2',
    recipientName: 'recipientName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    isdCode: 'isdCode',
    title: 'title',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    country: 'country',
    countryCode: 'countryCode',
    url: 'url',
    metadata: {},
  };

  const updateActivityPartnerRequest: UpdateActivityPartnerRequest = {
    impact: 'impact',
    bnfLanguage: 'bnfLanguage',
    cost: 6.35,
    bnfLocation: 'bnfLocation',
    countryId: 'countryId',
    cityId: 'cityId',
    address: updateActivityPartnerAddressRequest,
    thumbnailUrl: 'thumbnailUrl',
  };

  const { data } = await pocSdk.activityPartner.activityPartnerControllerUpdate('id', updateActivityPartnerRequest);

  console.log(data);
})();
```

## activityPartnerControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/activity-partner/{id}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerDelete('id');

  console.log(data);
})();
```

## activityPartnerControllerGetAvailableVariants

- HTTP Method: `GET`
- Endpoint: `/v2/activity-partner/available-variant`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.activityPartner.activityPartnerControllerGetAvailableVariants();

  console.log(data);
})();
```

## activityPartnerControllerDisable

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner/{id}/disable`

**Parameters**

| Name | Type   | Required | Description       |
| :--- | :----- | :------- | :---------------- |
| body | any    | ✅       | The request body. |
| id   | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.activityPartner.activityPartnerControllerDisable('id', input);

  console.log(data);
})();
```

## activityPartnerControllerDisableVariant

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner/variant/{variant_id}/disable`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| body      | any    | ✅       | The request body. |
| variantId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.activityPartner.activityPartnerControllerDisableVariant('variant_id', input);

  console.log(data);
})();
```

## activityPartnerControllerAddVariants

- HTTP Method: `POST`
- Endpoint: `/v2/activity-partner/{id}/variants`

**Parameters**

| Name | Type   | Required | Description       |
| :--- | :----- | :------- | :---------------- |
| body | any    | ✅       | The request body. |
| id   | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.activityPartner.activityPartnerControllerAddVariants('id', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
