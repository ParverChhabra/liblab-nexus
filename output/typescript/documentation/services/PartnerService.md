# PartnerService

A list of all methods in the `PartnerService` service. Click on the method name to view detailed information about that method.

| Methods                                                                           | Description |
| :-------------------------------------------------------------------------------- | :---------- |
| [partnerControllerList](#partnercontrollerlist)                                   |             |
| [partnerControllerCreate](#partnercontrollercreate)                               |             |
| [partnerControllerAddShippingAddress](#partnercontrolleraddshippingaddress)       |             |
| [partnerControllerDisable](#partnercontrollerdisable)                             |             |
| [partnerControllerUpdateShippingAddress](#partnercontrollerupdateshippingaddress) |             |
| [partnerControllerDeleteShippingAddress](#partnercontrollerdeleteshippingaddress) |             |
| [partnerControllerAddBeneficiary](#partnercontrolleraddbeneficiary)               |             |
| [partnerControllerUpdateBeneficiary](#partnercontrollerupdatebeneficiary)         |             |
| [partnerControllerDeleteBeneficiary](#partnercontrollerdeletebeneficiary)         |             |
| [partnerControllerGet](#partnercontrollerget)                                     |             |
| [partnerControllerUpdate](#partnercontrollerupdate)                               |             |
| [partnerControllerRemove](#partnercontrollerremove)                               |             |
| [partnerControllerGetPartnerCities](#partnercontrollergetpartnercities)           |             |

## partnerControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/partner`

**Parameters**

| Name           | Type     | Required | Description |
| :------------- | :------- | :------- | :---------- |
| q              | string   | ❌       |             |
| languages      | string[] | ❌       |             |
| isBenevity     | string   | ❌       |             |
| impactLocation | string[] | ❌       |             |
| focusArea      | string[] | ❌       |             |
| cityId         | string[] | ❌       |             |
| country        | string[] | ❌       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerList({
    q: 'q',
    languages: ['languages'],
    isBenevity: 'isBenevity',
    impactLocation: ['impactLocation'],
    focusArea: ['focusArea'],
    cityId: ['cityId'],
    country: ['country'],
  });

  console.log(data);
})();
```

## partnerControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/partner`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [CreatePartnerRequest](../models/CreatePartnerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreatePartnerCorporateAddressRequest, CreatePartnerRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createPartnerCorporateAddressRequest: CreatePartnerCorporateAddressRequest = {
    line1: 'line1',
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
    url: 'url',
    metadata: {},
  };

  const createPartnerRequest: CreatePartnerRequest = {
    name: 'name',
    description: 'description',
    focusAreas: 'focusAreas',
    impactLocation: 'impactLocation',
    comments: 'comments',
    isBenevity: true,
    charityRegNo: 'charityRegNo',
    websiteUrl: 'websiteUrl',
    videoUrl: 'videoUrl',
    languages: 'languages',
    logoUrl: 'logoUrl',
    phoneNumber: 'phoneNumber',
    isdCode: 'isdCode',
    corporateAddress: createPartnerCorporateAddressRequest,
    pocEmail: 'pocEmail',
    pocNumber: 'pocNumber',
    pocName: 'pocName',
    gooderaPocId: 'gooderaPocId',
    countryId: 'countryId',
    nominationStatus: 'nominationStatus',
  };

  const { data } = await pocSdk.partner.partnerControllerCreate(createPartnerRequest);

  console.log(data);
})();
```

## partnerControllerAddShippingAddress

- HTTP Method: `POST`
- Endpoint: `/v2/partner/{id}/shipping-address`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreatePartnerShippingAddress](../models/CreatePartnerShippingAddress.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreatePartnerShippingAddress, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createPartnerShippingAddress: CreatePartnerShippingAddress = {
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
    url: 'url',
    metadata: {},
  };

  const { data } = await pocSdk.partner.partnerControllerAddShippingAddress(createPartnerShippingAddress);

  console.log(data);
})();
```

## partnerControllerDisable

- HTTP Method: `POST`
- Endpoint: `/v2/partner/{id}/disable`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [DisablePartnerRequest](../models/DisablePartnerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { DisablePartnerRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const disablePartnerRequest: DisablePartnerRequest = {
    disable: true,
  };

  const { data } = await pocSdk.partner.partnerControllerDisable(disablePartnerRequest);

  console.log(data);
})();
```

## partnerControllerUpdateShippingAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/partner/{id}/shipping-address/{addressId}`

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

  const { data } = await pocSdk.partner.partnerControllerUpdateShippingAddress(input);

  console.log(data);
})();
```

## partnerControllerDeleteShippingAddress

- HTTP Method: `DELETE`
- Endpoint: `/v2/partner/{id}/shipping-address/{address_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| id        | string | ✅       |             |
| addressId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerDeleteShippingAddress('id', 'address_id');

  console.log(data);
})();
```

## partnerControllerAddBeneficiary

- HTTP Method: `POST`
- Endpoint: `/v2/partner/{id}/beneficiary`

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

  const { data } = await pocSdk.partner.partnerControllerAddBeneficiary(input);

  console.log(data);
})();
```

## partnerControllerUpdateBeneficiary

- HTTP Method: `PUT`
- Endpoint: `/v2/partner/{id}/beneficiary/{beneficiary_id}`

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

  const { data } = await pocSdk.partner.partnerControllerUpdateBeneficiary(input);

  console.log(data);
})();
```

## partnerControllerDeleteBeneficiary

- HTTP Method: `DELETE`
- Endpoint: `/v2/partner/{id}/beneficiary/{beneficiary_id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerDeleteBeneficiary();

  console.log(data);
})();
```

## partnerControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/partner/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerGet();

  console.log(data);
})();
```

## partnerControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/partner/{id}`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [UpdatePartnerRequest](../models/UpdatePartnerRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdatePartnerCorporateAddressRequest, UpdatePartnerRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updatePartnerCorporateAddressRequest: UpdatePartnerCorporateAddressRequest = {
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

  const updatePartnerRequest: UpdatePartnerRequest = {
    name: 'name',
    description: 'description',
    focusAreas: 'focusAreas',
    impactLocation: 'impactLocation',
    comments: 'comments',
    isBenevity: true,
    charityRegNo: 'charityRegNo',
    websiteUrl: 'websiteUrl',
    videoUrl: 'videoUrl',
    languages: 'languages',
    logoUrl: 'logoUrl',
    isdCode: 'isdCode',
    corporateAddress: updatePartnerCorporateAddressRequest,
    countryId: 'countryId',
    pocEmail: 'pocEmail',
    pocNumber: 'pocNumber',
    pocName: 'pocName',
    gooderaPocId: 'gooderaPocId',
    nominationStatus: 'nominationStatus',
  };

  const { data } = await pocSdk.partner.partnerControllerUpdate(updatePartnerRequest);

  console.log(data);
})();
```

## partnerControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/partner/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerRemove();

  console.log(data);
})();
```

## partnerControllerGetPartnerCities

- HTTP Method: `GET`
- Endpoint: `/v2/partner/partner-cities/{partnerCountryId}`

**Parameters**

| Name             | Type   | Required | Description |
| :--------------- | :----- | :------- | :---------- |
| partnerCountryId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.partner.partnerControllerGetPartnerCities('partnerCountryId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
