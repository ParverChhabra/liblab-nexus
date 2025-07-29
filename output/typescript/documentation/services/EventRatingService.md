# EventRatingService

A list of all methods in the `EventRatingService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                 | Description |
| :------------------------------------------------------------------------------------------------------ | :---------- |
| [eventRatingsControllerCreate](#eventratingscontrollercreate)                                           |             |
| [eventRatingsControllerCreatePollsFromRegistration](#eventratingscontrollercreatepollsfromregistration) |             |
| [eventRatingsControllerCreatePollsFromThirdParty](#eventratingscontrollercreatepollsfromthirdparty)     |             |
| [eventRatingsControllerCreateManual](#eventratingscontrollercreatemanual)                               |             |
| [eventRatingsControllerCreateNoPoll](#eventratingscontrollercreatenopoll)                               |             |
| [eventRatingsControllerCreateFromApi](#eventratingscontrollercreatefromapi)                             |             |
| [eventRatingsControllerFindAllRatingType](#eventratingscontrollerfindallratingtype)                     |             |
| [eventRatingsControllerCreateRatingType](#eventratingscontrollercreateratingtype)                       |             |
| [eventRatingsControllerCalculateResponse](#eventratingscontrollercalculateresponse)                     |             |
| [eventRatingsControllerCalculateParticipants](#eventratingscontrollercalculateparticipants)             |             |
| [eventRatingsControllerGetRatingTypeById](#eventratingscontrollergetratingtypebyid)                     |             |
| [eventRatingsControllerUpdateRatingType](#eventratingscontrollerupdateratingtype)                       |             |
| [eventRatingsControllerDeleteRatingType](#eventratingscontrollerdeleteratingtype)                       |             |
| [eventRatingsControllerGetEventRating](#eventratingscontrollergeteventrating)                           |             |
| [eventRatingsControllerDelete](#eventratingscontrollerdelete)                                           |             |

## eventRatingsControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreate(input);

  console.log(data);
})();
```

## eventRatingsControllerCreatePollsFromRegistration

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/event/{eventId}/registration`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreatePollsFromRegistration('eventId');

  console.log(data);
})();
```

## eventRatingsControllerCreatePollsFromThirdParty

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/event/{eventId}/third_party`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreatePollsFromThirdParty('eventId');

  console.log(data);
})();
```

## eventRatingsControllerCreateManual

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/manual`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreateManual(input);

  console.log(data);
})();
```

## eventRatingsControllerCreateNoPoll

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/no_poll`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreateNoPoll(input);

  console.log(data);
})();
```

## eventRatingsControllerCreateFromApi

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/init_sync`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreateFromApi(input);

  console.log(data);
})();
```

## eventRatingsControllerFindAllRatingType

- HTTP Method: `GET`
- Endpoint: `/v2/event_rating/rating_type`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventRating.eventRatingsControllerFindAllRatingType();

  console.log(data);
})();
```

## eventRatingsControllerCreateRatingType

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/rating_type`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCreateRatingType(input);

  console.log(data);
})();
```

## eventRatingsControllerCalculateResponse

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/calculate_response`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCalculateResponse(input);

  console.log(data);
})();
```

## eventRatingsControllerCalculateParticipants

- HTTP Method: `POST`
- Endpoint: `/v2/event_rating/num_participants`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerCalculateParticipants(input);

  console.log(data);
})();
```

## eventRatingsControllerGetRatingTypeById

- HTTP Method: `GET`
- Endpoint: `/v2/event_rating/rating_type/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventRating.eventRatingsControllerGetRatingTypeById();

  console.log(data);
})();
```

## eventRatingsControllerUpdateRatingType

- HTTP Method: `PUT`
- Endpoint: `/v2/event_rating/rating_type/{id}`

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

  const { data } = await pocSdk.eventRating.eventRatingsControllerUpdateRatingType(input);

  console.log(data);
})();
```

## eventRatingsControllerDeleteRatingType

- HTTP Method: `DELETE`
- Endpoint: `/v2/event_rating/rating_type/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventRating.eventRatingsControllerDeleteRatingType();

  console.log(data);
})();
```

## eventRatingsControllerGetEventRating

- HTTP Method: `GET`
- Endpoint: `/v2/event_rating/{eventId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventRating.eventRatingsControllerGetEventRating();

  console.log(data);
})();
```

## eventRatingsControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/event_rating/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventRating.eventRatingsControllerDelete();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
