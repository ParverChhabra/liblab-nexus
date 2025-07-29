# EventParticipationService

A list of all methods in the `EventParticipationService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                               | Description |
| :------------------------------------------------------------------------------------------------------------------------------------ | :---------- |
| [eventParticipationControllerCreate](#eventparticipationcontrollercreate)                                                             |             |
| [eventParticipationControllerGetLatestEventParticipation](#eventparticipationcontrollergetlatesteventparticipation)                   |             |
| [eventParticipationControllerCreateParticipationFromThirdParty](#eventparticipationcontrollercreateparticipationfromthirdparty)       |             |
| [eventParticipationControllerCreateParticipationFromRegistrations](#eventparticipationcontrollercreateparticipationfromregistrations) |             |
| [eventParticipationControllerInitParticipation](#eventparticipationcontrollerinitparticipation)                                       |             |
| [eventParticipationControllerGetUpdateHistory](#eventparticipationcontrollergetupdatehistory)                                         |             |
| [eventParticipationControllerGetAllParticipants](#eventparticipationcontrollergetallparticipants)                                     |             |

## eventParticipationControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/event_participation`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateEventParticipationRequest](../models/CreateEventParticipationRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateEventParticipationRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventParticipationRequest: CreateEventParticipationRequest = {
    eventId: {},
    finalCount: 6.48,
    takenFrom: 'takenFrom',
    isHybrid: true,
    isVerified: true,
    participants: ['participants'],
  };

  const { data } = await pocSdk.eventParticipation.eventParticipationControllerCreate(createEventParticipationRequest);

  console.log(data);
})();
```

## eventParticipationControllerGetLatestEventParticipation

- HTTP Method: `GET`
- Endpoint: `/v2/event_participation/event/{eventId}/latest`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventParticipation.eventParticipationControllerGetLatestEventParticipation();

  console.log(data);
})();
```

## eventParticipationControllerCreateParticipationFromThirdParty

- HTTP Method: `POST`
- Endpoint: `/v2/event_participation/event/{eventId}/third_party_int`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventParticipation.eventParticipationControllerCreateParticipationFromThirdParty();

  console.log(data);
})();
```

## eventParticipationControllerCreateParticipationFromRegistrations

- HTTP Method: `POST`
- Endpoint: `/v2/event_participation/event/{eventId}/registration`

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

  const { data } =
    await pocSdk.eventParticipation.eventParticipationControllerCreateParticipationFromRegistrations('eventId');

  console.log(data);
})();
```

## eventParticipationControllerInitParticipation

- HTTP Method: `POST`
- Endpoint: `/v2/event_participation/initialize`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [InitParticipationRequest](../models/InitParticipationRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { InitParticipationRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const initParticipationRequest: InitParticipationRequest = {
    eventId: {},
    isHybrid: true,
    meetingId: 'meetingId',
    meetingParticipants: ['meetingParticipants'],
  };

  const { data } =
    await pocSdk.eventParticipation.eventParticipationControllerInitParticipation(initParticipationRequest);

  console.log(data);
})();
```

## eventParticipationControllerGetUpdateHistory

- HTTP Method: `GET`
- Endpoint: `/v2/event_participation/event/{eventId}/history`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventParticipation.eventParticipationControllerGetUpdateHistory();

  console.log(data);
})();
```

## eventParticipationControllerGetAllParticipants

- HTTP Method: `GET`
- Endpoint: `/v2/event_participation/event/{eventId}/participants`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.eventParticipation.eventParticipationControllerGetAllParticipants();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
