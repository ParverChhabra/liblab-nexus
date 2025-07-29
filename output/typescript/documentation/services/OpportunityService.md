# OpportunityService

A list of all methods in the `OpportunityService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                       | Description |
| :------------------------------------------------------------------------------------------------------------ | :---------- |
| [opportunityControllerList](#opportunitycontrollerlist)                                                       |             |
| [opportunityControllerCreate](#opportunitycontrollercreate)                                                   |             |
| [opportunityControllerGet](#opportunitycontrollerget)                                                         |             |
| [opportunityControllerUpdate](#opportunitycontrollerupdate)                                                   |             |
| [opportunityControllerAddVariant](#opportunitycontrolleraddvariant)                                           |             |
| [opportunityControllerListValidVariantsForOpportunity](#opportunitycontrollerlistvalidvariantsforopportunity) |             |
| [opportunityControllerAddVariants](#opportunitycontrolleraddvariants)                                         |             |
| [opportunityControllerDisable](#opportunitycontrollerdisable)                                                 |             |
| [opportunityControllerAddOppTags](#opportunitycontrolleraddopptags)                                           |             |
| [opportunityControllerGetPartnersForOpportunity](#opportunitycontrollergetpartnersforopportunity)             |             |
| [opportunityControllerListLocationsForOpportunity](#opportunitycontrollerlistlocationsforopportunity)         |             |

## opportunityControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/opportunity`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.opportunity.opportunityControllerList();

  console.log(data);
})();
```

## opportunityControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/opportunity`

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

  const { data } = await pocSdk.opportunity.opportunityControllerCreate(input);

  console.log(data);
})();
```

## opportunityControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/opportunity/{id}`

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

  const { data } = await pocSdk.opportunity.opportunityControllerGet('id');

  console.log(data);
})();
```

## opportunityControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/opportunity/{id}`

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

  const { data } = await pocSdk.opportunity.opportunityControllerUpdate('id', input);

  console.log(data);
})();
```

## opportunityControllerAddVariant

- HTTP Method: `POST`
- Endpoint: `/v2/opportunity/{id}/variant`

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

  const { data } = await pocSdk.opportunity.opportunityControllerAddVariant('id', input);

  console.log(data);
})();
```

## opportunityControllerListValidVariantsForOpportunity

- HTTP Method: `GET`
- Endpoint: `/v2/opportunity/{id}/variants`

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

  const { data } = await pocSdk.opportunity.opportunityControllerListValidVariantsForOpportunity('id');

  console.log(data);
})();
```

## opportunityControllerAddVariants

- HTTP Method: `POST`
- Endpoint: `/v2/opportunity/{id}/variants`

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

  const { data } = await pocSdk.opportunity.opportunityControllerAddVariants('id', input);

  console.log(data);
})();
```

## opportunityControllerDisable

- HTTP Method: `POST`
- Endpoint: `/v2/opportunity/{id}/disable`

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

  const { data } = await pocSdk.opportunity.opportunityControllerDisable('id', input);

  console.log(data);
})();
```

## opportunityControllerAddOppTags

- HTTP Method: `POST`
- Endpoint: `/v2/opportunity/{id}/tag`

**Parameters**

| Name | Type                                        | Required | Description       |
| :--- | :------------------------------------------ | :------- | :---------------- |
| body | [OppTagRequest](../models/OppTagRequest.md) | ✅       | The request body. |
| id   | string                                      | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { OppTagRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const oppTagRequest: OppTagRequest = {
    clientTagIds: ['clientTagIds'],
  };

  const { data } = await pocSdk.opportunity.opportunityControllerAddOppTags('id', oppTagRequest);

  console.log(data);
})();
```

## opportunityControllerGetPartnersForOpportunity

- HTTP Method: `GET`
- Endpoint: `/v2/opportunity/{id}/partners`

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

  const { data } = await pocSdk.opportunity.opportunityControllerGetPartnersForOpportunity('id');

  console.log(data);
})();
```

## opportunityControllerListLocationsForOpportunity

- HTTP Method: `GET`
- Endpoint: `/v2/opportunity/{id}/locations`

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

  const { data } = await pocSdk.opportunity.opportunityControllerListLocationsForOpportunity('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
