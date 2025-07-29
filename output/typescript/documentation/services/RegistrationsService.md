# RegistrationsService

A list of all methods in the `RegistrationsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description |
| :------------------------------------------------------------------------------------ | :---------- |
| [registrationControllerList](#registrationcontrollerlist)                             |             |
| [registrationControllerCreate](#registrationcontrollercreate)                         |             |
| [registrationControllerCreateMany](#registrationcontrollercreatemany)                 |             |
| [registrationControllerEnqueueQrEmails](#registrationcontrollerenqueueqremails)       |             |
| [registrationControllerSendQrEmails](#registrationcontrollersendqremails)             |             |
| [registrationControllerGetVolunteerTicket](#registrationcontrollergetvolunteerticket) |             |
| [registrationControllerMarkAttendance](#registrationcontrollermarkattendance)         |             |
| [registrationControllerUpdate](#registrationcontrollerupdate)                         |             |
| [registrationControllerRemove](#registrationcontrollerremove)                         |             |
| [registrationAgentControllerList](#registrationagentcontrollerlist)                   |             |

## registrationControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/registration`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.registrations.registrationControllerList();

  console.log(data);
})();
```

## registrationControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/registration`

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

  const { data } = await pocSdk.registrations.registrationControllerCreate(createRegistrationRequest);

  console.log(data);
})();
```

## registrationControllerCreateMany

- HTTP Method: `POST`
- Endpoint: `/v2/registration/{event_id}/many`

**Parameters**

| Name    | Type                                                                | Required | Description       |
| :------ | :------------------------------------------------------------------ | :------- | :---------------- |
| body    | [CreateManyForEventRequest](../models/CreateManyForEventRequest.md) | ✅       | The request body. |
| eventId | string                                                              | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { CreateManyForEventRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createManyForEventRequest: CreateManyForEventRequest = {
    emails: ['emails'],
  };

  const { data } = await pocSdk.registrations.registrationControllerCreateMany('event_id', createManyForEventRequest);

  console.log(data);
})();
```

## registrationControllerEnqueueQrEmails

- HTTP Method: `POST`
- Endpoint: `/v2/registration/{event_id}/enqueue_qr_emails`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.registrations.registrationControllerEnqueueQrEmails();

  console.log(data);
})();
```

## registrationControllerSendQrEmails

- HTTP Method: `POST`
- Endpoint: `/v2/registration/{registration_id}/send_qr_email`

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

  const { data } = await pocSdk.registrations.registrationControllerSendQrEmails(input);

  console.log(data);
})();
```

## registrationControllerGetVolunteerTicket

- HTTP Method: `GET`
- Endpoint: `/v2/registration/event/{eventId}/customer/{customerId}`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| eventId    | string | ✅       |             |
| customerId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.registrations.registrationControllerGetVolunteerTicket('eventId', 'customerId');

  console.log(data);
})();
```

## registrationControllerMarkAttendance

- HTTP Method: `POST`
- Endpoint: `/v2/registration/mark_attendance`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [MarkAttendanceRequest](../models/MarkAttendanceRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { MarkAttendanceRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const markAttendanceRequest: MarkAttendanceRequest = {
    registrationId: {},
    email: 'customer@example.com',
    eventId: {},
  };

  const { data } = await pocSdk.registrations.registrationControllerMarkAttendance(markAttendanceRequest);

  console.log(data);
})();
```

## registrationControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/registration/{id}`

**Parameters**

| Name | Type                                                                | Required | Description       |
| :--- | :------------------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateRegistrationRequest](../models/UpdateRegistrationRequest.md) | ✅       | The request body. |
| id   | string                                                              | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateRegistrationRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const qrEmailStatus = 'pending';

  const updateRegistrationRequest: UpdateRegistrationRequest = {
    calendarInviteId: 'invite123',
    qrEmailStatus: qrEmailStatus,
    qrUrl: 'https://example.com/qr-code',
    attendanceMarkedAt: '2023-07-01T10:00:00.000Z',
  };

  const { data } = await pocSdk.registrations.registrationControllerUpdate('id', updateRegistrationRequest);

  console.log(data);
})();
```

## registrationControllerRemove

- HTTP Method: `POST`
- Endpoint: `/v2/registration/{id}/cancel`

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

  const { data } = await pocSdk.registrations.registrationControllerRemove('id');

  console.log(data);
})();
```

## registrationAgentControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/registration`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.registrations.registrationAgentControllerList();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
