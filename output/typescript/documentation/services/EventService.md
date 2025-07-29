# EventService

A list of all methods in the `EventService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                           | Description |
| :------------------------------------------------------------------------------------------------ | :---------- |
| [adminEventControllerGetEventCollateralTemplate](#admineventcontrollergeteventcollateraltemplate) |             |
| [adminEventControllerList](#admineventcontrollerlist)                                             |             |
| [adminEventControllerCreate](#admineventcontrollercreate)                                         |             |
| [adminEventControllerGet](#admineventcontrollerget)                                               |             |
| [adminEventControllerUpdate](#admineventcontrollerupdate)                                         |             |
| [adminEventControllerCancel](#admineventcontrollercancel)                                         |             |
| [adminEventControllerGetConflictingEvents](#admineventcontrollergetconflictingevents)             |             |
| [adminEventControllerAddHost](#admineventcontrolleraddhost)                                       |             |
| [adminEventControllerUpdateHost](#admineventcontrollerupdatehost)                                 |             |
| [adminEventControllerRemoveHost](#admineventcontrollerremovehost)                                 |             |
| [adminEventControllerAddMultipleHost](#admineventcontrolleraddmultiplehost)                       |             |
| [adminEventControllerGetAvailableHosts](#admineventcontrollergetavailablehosts)                   |             |
| [adminEventControllerGetCalendarActionables](#admineventcontrollergetcalendaractionables)         |             |
| [adminEventControllerValidateOldEventId](#admineventcontrollervalidateoldeventid)                 |             |
| [adminEventControllerGetShowcasePageData](#admineventcontrollergetshowcasepagedata)               |             |
| [adminEventControllerGetApprovalPageData](#admineventcontrollergetapprovalpagedata)               |             |
| [adminEventControllerCreateEventShipmentAddress](#admineventcontrollercreateeventshipmentaddress) |             |
| [adminEventControllerUpdateEventshipmentAddress](#admineventcontrollerupdateeventshipmentaddress) |             |
| [adminEventControllerAddPartnerTestimonial](#admineventcontrolleraddpartnertestimonial)           |             |
| [adminEventControllerUpdatePartnerTestimonial](#admineventcontrollerupdatepartnertestimonial)     |             |
| [adminEventControllerGetEventCatalogue](#admineventcontrollergeteventcatalogue)                   |             |
| [adminEventControllerUpsertMeetAndGreet](#admineventcontrollerupsertmeetandgreet)                 |             |
| [adminEventControllerAttachChecklist](#admineventcontrollerattachchecklist)                       |             |

## adminEventControllerGetEventCollateralTemplate

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/collateral_templates`

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

  const { data } = await pocSdk.event.adminEventControllerGetEventCollateralTemplate('id');

  console.log(data);
})();
```

## adminEventControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/event`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.event.adminEventControllerList();

  console.log(data);
})();
```

## adminEventControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/event`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [CreateEventRequest](../models/CreateEventRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import {
  CreateBookingSessionRequest,
  CreateEventAddressRequest,
  CreateEventChampionRequest,
  CreateEventMeetingSessionRequest,
  CreateEventRequest,
  PocSdk,
} from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventAddressRequest: CreateEventAddressRequest = {
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

  const createEventChampionRequestRole = 'VOLUNTEER';

  const createEventChampionRequest: CreateEventChampionRequest = {
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: createEventChampionRequestRole,
    phone: 'phone',
    isdCode: 'isdCode',
  };

  const createEventMeetingSessionRequest: CreateEventMeetingSessionRequest = {
    thirdPartyId: 'thirdPartyId',
    registrationRequired: true,
    passcode: 'passcode',
    url: 'url',
  };

  const createBookingSessionRequestProvider = 'benevity';

  const createBookingSessionRequest: CreateBookingSessionRequest = {
    thirdPartyId: 'thirdPartyId',
    url: 'url',
    provider: createBookingSessionRequestProvider,
  };

  const createEventRequest: CreateEventRequest = {
    opportunityId: 'opportunityId',
    variantId: 'variantId',
    partnerId: 'partnerId',
    isAsync: {},
    address: createEventAddressRequest,
    champion: createEventChampionRequest,
    countryId: 'countryId',
    cityId: 'cityId',
    startTimeStamp: 'startTimeStamp',
    endTimeStamp: 'endTimeStamp',
    timezone: 'timezone',
    language: 'language',
    csmId: 'csmId',
    programManagerId: 'programManagerId',
    expectedVolunteerCount: 9.77,
    tags: ['tags'],
    name: 'name',
    meetingSession: createEventMeetingSessionRequest,
    customCalendarDescription: 'customCalendarDescription',
    othersTagDescription: 'othersTagDescription',
    customCalendarTitle: 'customCalendarTitle',
    bookingSession: createBookingSessionRequest,
    championResponses: {},
    source: 'source',
    submissionDeadline: 2.12,
  };

  const { data } = await pocSdk.event.adminEventControllerCreate(createEventRequest);

  console.log(data);
})();
```

## adminEventControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}`

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

  const { data } = await pocSdk.event.adminEventControllerGet('id');

  console.log(data);
})();
```

## adminEventControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/event/{id}`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [UpdateEventRequest](../models/UpdateEventRequest.md) | ✅       | The request body. |
| id   | string                                                | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import {
  CreateMaterialItemRequest,
  PocSdk,
  UpdateBookingSessionRequest,
  UpdateEventAddressRequest,
  UpdateEventChampionRequest,
  UpdateEventRequest,
} from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateEventChampionRequestRole = 'VOLUNTEER';

  const updateEventChampionRequest: UpdateEventChampionRequest = {
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: updateEventChampionRequestRole,
    phone: 'phone',
    isdCode: 'isdCode',
  };

  const createMaterialItemRequest: CreateMaterialItemRequest = {
    name: 'name',
    quantity: 5.28,
    url: 'url',
    skuId: 'skuId',
    productId: 'productId',
  };

  const updateEventAddressRequest: UpdateEventAddressRequest = {
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

  const updateBookingSessionRequestProvider = 'benevity';

  const updateBookingSessionRequest: UpdateBookingSessionRequest = {
    thirdPartyId: 'thirdPartyId',
    url: 'url',
    provider: updateBookingSessionRequestProvider,
  };

  const updateEventRequest: UpdateEventRequest = {
    partnerId: 'partnerId',
    champion: updateEventChampionRequest,
    countryId: 'countryId',
    cityId: 'cityId',
    startTimeStamp: 'startTimeStamp',
    endTimeStamp: 'endTimeStamp',
    timezone: 'timezone',
    name: 'name',
    prerequisites: 'prerequisites',
    roleOfVolunteer: 'roleOfVolunteer',
    kitDescription: [createMaterialItemRequest],
    materialCost: 6063.53,
    kitImgUrls: ['kitImgUrls'],
    itinerary: [{}],
    language: 'language',
    csmId: 'csmId',
    programManagerId: 'programManagerId',
    expectedVolunteerCount: 2.4,
    tags: ['tags'],
    othersTagDescription: 'othersTagDescription',
    isdCode: 'isdCode',
    address: updateEventAddressRequest,
    customCalendarDescription: 'customCalendarDescription',
    customCalendarTitle: 'customCalendarTitle',
    bookingSession: updateBookingSessionRequest,
    submissionDeadline: 3.19,
  };

  const { data } = await pocSdk.event.adminEventControllerUpdate('id', updateEventRequest);

  console.log(data);
})();
```

## adminEventControllerCancel

- HTTP Method: `POST`
- Endpoint: `/v2/event/{id}/cancel`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [CancelEventRequest](../models/CancelEventRequest.md) | ✅       | The request body. |
| id   | string                                                | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { CancelEventRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const cancelEventRequest: CancelEventRequest = {
    reason: 'reason',
  };

  const { data } = await pocSdk.event.adminEventControllerCancel('id', cancelEventRequest);

  console.log(data);
})();
```

## adminEventControllerGetConflictingEvents

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/host/{host_id}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| id     | string | ✅       |             |
| hostId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.event.adminEventControllerGetConflictingEvents('id', 'host_id');

  console.log(data);
})();
```

## adminEventControllerAddHost

- HTTP Method: `POST`
- Endpoint: `/v2/event/{id}/host/{host_id}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| id     | string | ✅       |             |
| hostId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.event.adminEventControllerAddHost('id', 'host_id');

  console.log(data);
})();
```

## adminEventControllerUpdateHost

- HTTP Method: `PUT`
- Endpoint: `/v2/event/{id}/host/{host_id}`

**Parameters**

| Name   | Type                                                          | Required | Description       |
| :----- | :------------------------------------------------------------ | :------- | :---------------- |
| body   | [UpdateEventHostRequest](../models/UpdateEventHostRequest.md) | ✅       | The request body. |
| id     | string                                                        | ✅       |                   |
| hostId | string                                                        | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateEventHostRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const invitationStatus = 'pending';

  const updateEventHostRequest: UpdateEventHostRequest = {
    invitationStatus: invitationStatus,
    calendarInviteId: 'calendarInviteId',
    currency: 'currency',
    modeOfPayment: 'modeOfPayment',
    hostingCost: 3.3,
    translationCost: 3.56,
    preEventShipmentCost: 9.27,
    postEventShipmentCost: 3.32,
    travelReimbursementCost: 7.42,
    projectManagementCost: 3.93,
  };

  const { data } = await pocSdk.event.adminEventControllerUpdateHost('id', 'host_id', updateEventHostRequest);

  console.log(data);
})();
```

## adminEventControllerRemoveHost

- HTTP Method: `DELETE`
- Endpoint: `/v2/event/{id}/host/{host_id}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| id     | string | ✅       |             |
| hostId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.event.adminEventControllerRemoveHost('id', 'host_id');

  console.log(data);
})();
```

## adminEventControllerAddMultipleHost

- HTTP Method: `POST`
- Endpoint: `/v2/event/{id}/hosts`

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

  const { data } = await pocSdk.event.adminEventControllerAddMultipleHost('id', input);

  console.log(data);
})();
```

## adminEventControllerGetAvailableHosts

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/available_hosts`

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

  const { data } = await pocSdk.event.adminEventControllerGetAvailableHosts('id');

  console.log(data);
})();
```

## adminEventControllerGetCalendarActionables

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/calendar-actionable`

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

  const { data } = await pocSdk.event.adminEventControllerGetCalendarActionables('id');

  console.log(data);
})();
```

## adminEventControllerValidateOldEventId

- HTTP Method: `GET`
- Endpoint: `/v2/event/old-event/{id}`

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

  const { data } = await pocSdk.event.adminEventControllerValidateOldEventId('id');

  console.log(data);
})();
```

## adminEventControllerGetShowcasePageData

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/showcase`

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

  const { data } = await pocSdk.event.adminEventControllerGetShowcasePageData('id');

  console.log(data);
})();
```

## adminEventControllerGetApprovalPageData

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/approval-page`

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

  const { data } = await pocSdk.event.adminEventControllerGetApprovalPageData('id');

  console.log(data);
})();
```

## adminEventControllerCreateEventShipmentAddress

- HTTP Method: `POST`
- Endpoint: `/v2/event/{shipmentRole}/shipment-address`

**Parameters**

| Name         | Type                                                                                              | Required | Description       |
| :----------- | :------------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body         | [CreateEventShipmentAddressRequestPayload](../models/CreateEventShipmentAddressRequestPayload.md) | ✅       | The request body. |
| shipmentRole | string                                                                                            | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { CreateEventShipmentAddressRequestPayload, CreateShipmentAddress, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createShipmentAddress: CreateShipmentAddress = {
    line1: '123 Main St',
    line2: 'Suite 4B',
    latitude: '40.7128',
    longitude: '-74.0060',
    city: 'New York',
    province: 'NY',
    postalCode: '10001',
    country: 'USA',
    url: 'https://example.com',
    metadata: {},
    email: 'user@example.com',
    isdCode: '+1',
    phoneNumber: '123-456-7890',
    recipientName: 'John Doe',
  };

  const createEventShipmentAddressRequestPayload: CreateEventShipmentAddressRequestPayload = {
    eventId: 'eventId',
    entityId: 'entityId',
    address: createShipmentAddress,
    addressType: 'addressType',
  };

  const { data } = await pocSdk.event.adminEventControllerCreateEventShipmentAddress(
    'shipmentRole',
    createEventShipmentAddressRequestPayload,
  );

  console.log(data);
})();
```

## adminEventControllerUpdateEventshipmentAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/event/{shipmentRole}/shipment-address/{id}`

**Parameters**

| Name         | Type                                                                                              | Required | Description       |
| :----------- | :------------------------------------------------------------------------------------------------ | :------- | :---------------- |
| body         | [UpdateEventShipmentAddressRequestPayload](../models/UpdateEventShipmentAddressRequestPayload.md) | ✅       | The request body. |
| id           | string                                                                                            | ✅       |                   |
| shipmentRole | string                                                                                            | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateEventShipmentAddressRequestPayload, UpdateShipmentAddress } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateShipmentAddress: UpdateShipmentAddress = {
    line1: 'line1',
    line2: 'line2',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    country: 'country',
    url: 'url',
    metadata: {},
    email: 'email',
    isdCode: 'isdCode',
    phoneNumber: 'phoneNumber',
    recipientName: 'recipientName',
  };

  const updateEventShipmentAddressRequestPayload: UpdateEventShipmentAddressRequestPayload = {
    entityId: 'entityId',
    addressType: 'addressType',
    address: updateShipmentAddress,
  };

  const { data } = await pocSdk.event.adminEventControllerUpdateEventshipmentAddress(
    'id',
    'shipmentRole',
    updateEventShipmentAddressRequestPayload,
  );

  console.log(data);
})();
```

## adminEventControllerAddPartnerTestimonial

- HTTP Method: `POST`
- Endpoint: `/v2/event/{id}/partner_testimonial`

**Parameters**

| Name | Type                                                                                      | Required | Description       |
| :--- | :---------------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateEventPartnerTestimonialRequest](../models/CreateEventPartnerTestimonialRequest.md) | ✅       | The request body. |
| id   | string                                                                                    | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { CreateEventPartnerTestimonialRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventPartnerTestimonialRequest: CreateEventPartnerTestimonialRequest = {
    beneficiariesImpacted: 5.54,
    impactStatement: 'impactStatement',
    feedback: 'feedback',
    context: 'context',
    media: {},
  };

  const { data } = await pocSdk.event.adminEventControllerAddPartnerTestimonial(
    'id',
    createEventPartnerTestimonialRequest,
  );

  console.log(data);
})();
```

## adminEventControllerUpdatePartnerTestimonial

- HTTP Method: `PUT`
- Endpoint: `/v2/event/{id}/partner_testimonial/{partner_testimonial_id}`

**Parameters**

| Name                 | Type                                                                                      | Required | Description       |
| :------------------- | :---------------------------------------------------------------------------------------- | :------- | :---------------- |
| body                 | [UpdateEventPartnerTestimonialRequest](../models/UpdateEventPartnerTestimonialRequest.md) | ✅       | The request body. |
| partnerTestimonialId | string                                                                                    | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateEventPartnerTestimonialRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateEventPartnerTestimonialRequest: UpdateEventPartnerTestimonialRequest = {
    id: 'id',
    beneficiariesImpacted: 4.57,
    impactStatement: 'impactStatement',
    feedback: 'feedback',
    context: 'context',
    media: {},
  };

  const { data } = await pocSdk.event.adminEventControllerUpdatePartnerTestimonial(
    'partner_testimonial_id',
    updateEventPartnerTestimonialRequest,
  );

  console.log(data);
})();
```

## adminEventControllerGetEventCatalogue

- HTTP Method: `GET`
- Endpoint: `/v2/event/{id}/catalogue`

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

  const { data } = await pocSdk.event.adminEventControllerGetEventCatalogue('id');

  console.log(data);
})();
```

## adminEventControllerUpsertMeetAndGreet

- HTTP Method: `POST`
- Endpoint: `/v2/event/{id}/host/{host_id}/champion/{champion_id}/meet-and-greet`

**Parameters**

| Name       | Type                                                                  | Required | Description       |
| :--------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body       | [UpsertEventMeetAndGreetDto](../models/UpsertEventMeetAndGreetDto.md) | ✅       | The request body. |
| id         | string                                                                | ✅       |                   |
| hostId     | string                                                                | ✅       |                   |
| championId | string                                                                | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpsertEventMeetAndGreetDto } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const source = 'GOODEAR';

  const upsertEventMeetAndGreetDto: UpsertEventMeetAndGreetDto = {
    isDone: true,
    source: source,
    summary: 'summary',
    completionScore: 7.07,
  };

  const { data } = await pocSdk.event.adminEventControllerUpsertMeetAndGreet(
    'id',
    'host_id',
    'champion_id',
    upsertEventMeetAndGreetDto,
  );

  console.log(data);
})();
```

## adminEventControllerAttachChecklist

- HTTP Method: `POST`
- Endpoint: `/v2/event/{eventId}/attach-checklist`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.event.adminEventControllerAttachChecklist();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
