# DeveloperApiService

A list of all methods in the `DeveloperApiService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                   | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| [developerApiV1ControllerGetEvent](#developerapiv1controllergetevent)                     |             |
| [developerApiV1ControllerList](#developerapiv1controllerlist)                             |             |
| [developerApiV1ControllerCreateRegistration](#developerapiv1controllercreateregistration) |             |
| [developerApiV1ControllerDeleteRegistration](#developerapiv1controllerdeleteregistration) |             |
| [developerApiV2ControllerGetEvent](#developerapiv2controllergetevent)                     |             |
| [developerApiV2ControllerUpsertBooking](#developerapiv2controllerupsertbooking)           |             |
| [developerApiV2ControllerList](#developerapiv2controllerlist)                             |             |
| [developerApiV2ControllerCreateRegistration](#developerapiv2controllercreateregistration) |             |
| [developerApiV2ControllerDeleteRegistration](#developerapiv2controllerdeleteregistration) |             |

## developerApiV1ControllerGetEvent

- HTTP Method: `GET`
- Endpoint: `/v2/developer-api/v1/events/{eventId}`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| eventId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV1ControllerGetEvent('eventId');

  console.log(data);
})();
```

## developerApiV1ControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/developer-api/v1/events`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV1ControllerList();

  console.log(data);
})();
```

## developerApiV1ControllerCreateRegistration

- HTTP Method: `POST`
- Endpoint: `/v2/developer-api/v1/registrations`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateRegistrationRequest](../models/CreateRegistrationRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateRegistrationRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createRegistrationRequest: CreateRegistrationRequest = {
    customerEmail: 'customer@example.com',
    eventId: 'event12345',
    attendanceMarkedAt: '2023-07-01T10:00:00.000Z',
  };

  const { data } = await pocSdk.developerApi.developerApiV1ControllerCreateRegistration(createRegistrationRequest);

  console.log(data);
})();
```

## developerApiV1ControllerDeleteRegistration

- HTTP Method: `DELETE`
- Endpoint: `/v2/developer-api/v1/registrations/{registrationId}`

**Parameters**

| Name           | Type   | Required | Description |
| :------------- | :----- | :------- | :---------- |
| registrationId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV1ControllerDeleteRegistration('registrationId');

  console.log(data);
})();
```

## developerApiV2ControllerGetEvent

- HTTP Method: `GET`
- Endpoint: `/v2/developer-api/v2/events/{eventId}`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| eventId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV2ControllerGetEvent('eventId');

  console.log(data);
})();
```

## developerApiV2ControllerUpsertBooking

- HTTP Method: `POST`
- Endpoint: `/v2/developer-api/v2/events/{eventId}/booking`

**Parameters**

| Name    | Type   | Required | Description       |
| :------ | :----- | :------- | :---------------- |
| body    | any    | ✅       | The request body. |
| eventId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.developerApi.developerApiV2ControllerUpsertBooking('eventId', input);

  console.log(data);
})();
```

## developerApiV2ControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/developer-api/v2/events`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV2ControllerList();

  console.log(data);
})();
```

## developerApiV2ControllerCreateRegistration

- HTTP Method: `POST`
- Endpoint: `/v2/developer-api/v2/registrations`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateRegistrationRequest](../models/CreateRegistrationRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateRegistrationRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createRegistrationRequest: CreateRegistrationRequest = {
    customerEmail: 'customer@example.com',
    eventId: 'event12345',
    attendanceMarkedAt: '2023-07-01T10:00:00.000Z',
  };

  const { data } = await pocSdk.developerApi.developerApiV2ControllerCreateRegistration(createRegistrationRequest);

  console.log(data);
})();
```

## developerApiV2ControllerDeleteRegistration

- HTTP Method: `DELETE`
- Endpoint: `/v2/developer-api/v2/registrations/{registrationId}`

**Parameters**

| Name           | Type   | Required | Description |
| :------------- | :----- | :------- | :---------- |
| registrationId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.developerApi.developerApiV2ControllerDeleteRegistration('registrationId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
