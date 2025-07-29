# ChampionAppService

A list of all methods in the `ChampionAppService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                                             | Description |
| :---------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| [championAuthControllerVerifyRoute](#championauthcontrollerverifyroute)                                                             |             |
| [championAuthControllerRedirect](#championauthcontrollerredirect)                                                                   |             |
| [championAuthControllerCallback](#championauthcontrollercallback)                                                                   |             |
| [championAuthControllerLogout](#championauthcontrollerlogout)                                                                       |             |
| [championAuthControllerSendOtp](#championauthcontrollersendotp)                                                                     |             |
| [championAuthControllerVerifyOtp](#championauthcontrollerverifyotp)                                                                 |             |
| [championEventControllerListEventsForChampion](#championeventcontrollerlisteventsforchampion)                                       |             |
| [championEventControllerCreateEvent](#championeventcontrollercreateevent)                                                           |             |
| [championEventControllerGetEvent](#championeventcontrollergetevent)                                                                 |             |
| [championEventControllerUpdateEvent](#championeventcontrollerupdateevent)                                                           |             |
| [championEventControllerGetPollsAndParticipation](#championeventcontrollergetpollsandparticipation)                                 |             |
| [championControllerMe](#championcontrollerme)                                                                                       |             |
| [championOpportunityControllerGetActivityFormats](#championopportunitycontrollergetactivityformats)                                 |             |
| [championOpportunityControllerListDurationAndTags](#championopportunitycontrollerlistdurationandtags)                               |             |
| [championOpportunityControllerListCitiesForCountry](#championopportunitycontrollerlistcitiesforcountry)                             |             |
| [championOpportunityControllerList](#championopportunitycontrollerlist)                                                             |             |
| [championOpportunityControllerRecommendations](#championopportunitycontrollerrecommendations)                                       |             |
| [championOpportunityControllerGet](#championopportunitycontrollerget)                                                               |             |
| [championOpportunityControllerListPartners](#championopportunitycontrollerlistpartners)                                             |             |
| [championOpportunityControllerListVariants](#championopportunitycontrollerlistvariants)                                             |             |
| [championOpportunityControllerGetBookingDetails](#championopportunitycontrollergetbookingdetails)                                   |             |
| [championClientControllerGetChampionsConfig](#championclientcontrollergetchampionsconfig)                                           |             |
| [championClientControllerGetFaqBySlug](#championclientcontrollergetfaqbyslug)                                                       |             |
| [championClientControllerGetDefaultAuthType](#championclientcontrollergetdefaultauthtype)                                           |             |
| [championScheduleFormQuestionControllerGetScheduleQuestions](#championscheduleformquestioncontrollergetschedulequestions)           |             |
| [championMasterDataControllerFindByType](#championmasterdatacontrollerfindbytype)                                                   |             |
| [championMasterDataControllerGetByTypeAndDomain](#championmasterdatacontrollergetbytypeanddomain)                                   |             |
| [championSimpleAuthControllerLogin](#championsimpleauthcontrollerlogin)                                                             |             |
| [championOpportunityOutdoorControllerListOutdoorVariants](#championopportunityoutdoorcontrollerlistoutdoorvariants)                 |             |
| [championOpportunityOutdoorControllerGetInventorySlot](#championopportunityoutdoorcontrollergetinventoryslot)                       |             |
| [championOpportunityOutdoorControllerGetAvailableSlots](#championopportunityoutdoorcontrollergetavailableslots)                     |             |
| [championOpportunityOutdoorControllerGetActivityFormats](#championopportunityoutdoorcontrollergetactivityformats)                   |             |
| [championOpportunityOutdoorControllerListDurationAndTags](#championopportunityoutdoorcontrollerlistdurationandtags)                 |             |
| [championOpportunityOutdoorControllerList](#championopportunityoutdoorcontrollerlist)                                               |             |
| [championOpportunityOutdoorControllerListOutdoorCitiesForCountry](#championopportunityoutdoorcontrollerlistoutdoorcitiesforcountry) |             |
| [championOpportunityOutdoorControllerGet](#championopportunityoutdoorcontrollerget)                                                 |             |
| [championEventOutdoorControllerCreateOutdoorEvent](#championeventoutdoorcontrollercreateoutdoorevent)                               |             |
| [championShipmentControllerUpdateAcknowledgement](#championshipmentcontrollerupdateacknowledgement)                                 |             |
| [etpControllerGetTransformedResponse](#etpcontrollergettransformedresponse)                                                         |             |
| [championInsightsControllerGetInsights](#championinsightscontrollergetinsights)                                                     |             |

## championAuthControllerVerifyRoute

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/auth/verify-route`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championAuthControllerVerifyRoute();

  console.log(data);
})();
```

## championAuthControllerRedirect

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/auth/redirect`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championAuthControllerRedirect();

  console.log(data);
})();
```

## championAuthControllerCallback

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/auth/callback/{client_id}/{authType}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |
| authType | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championAuthControllerCallback('client_id', 'authType');

  console.log(data);
})();
```

## championAuthControllerLogout

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/auth/logout`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championAuthControllerLogout();

  console.log(data);
})();
```

## championAuthControllerSendOtp

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/auth/otp/send`

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

  const { data } = await pocSdk.championApp.championAuthControllerSendOtp(input);

  console.log(data);
})();
```

## championAuthControllerVerifyOtp

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/auth/otp/verify`

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

  const { data } = await pocSdk.championApp.championAuthControllerVerifyOtp(input);

  console.log(data);
})();
```

## championEventControllerListEventsForChampion

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/event`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championEventControllerListEventsForChampion();

  console.log(data);
})();
```

## championEventControllerCreateEvent

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/event`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateEventFromChampions](../models/CreateEventFromChampions.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateEventFromChampions, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventFromChampions: CreateEventFromChampions = {
    opportunityId: 'opportunityId',
    variantId: 'variantId',
    partnerId: 'partnerId',
    startTimeStamp: 'startTimeStamp',
    endTimeStamp: 'endTimeStamp',
    timezone: 'timezone',
    language: 'language',
    expectedVolunteerCount: 0.57,
  };

  const { data } = await pocSdk.championApp.championEventControllerCreateEvent(createEventFromChampions);

  console.log(data);
})();
```

## championEventControllerGetEvent

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/event/{id}`

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

  const { data } = await pocSdk.championApp.championEventControllerGetEvent('id');

  console.log(data);
})();
```

## championEventControllerUpdateEvent

- HTTP Method: `PUT`
- Endpoint: `/v2/champion-app/event/{id}`

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

  const { data } = await pocSdk.championApp.championEventControllerUpdateEvent('id', updateEventRequest);

  console.log(data);
})();
```

## championEventControllerGetPollsAndParticipation

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/event/{id}/poll-and-participation`

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

  const { data } = await pocSdk.championApp.championEventControllerGetPollsAndParticipation('id');

  console.log(data);
})();
```

## championControllerMe

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/champions/me`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championControllerMe();

  console.log(data);
})();
```

## championOpportunityControllerGetActivityFormats

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/{slug}/countries`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| slug | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityControllerGetActivityFormats('slug');

  console.log(data);
})();
```

## championOpportunityControllerListDurationAndTags

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/tags-and-durations`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityControllerListDurationAndTags();

  console.log(data);
})();
```

## championOpportunityControllerListCitiesForCountry

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/cities`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityControllerListCitiesForCountry();

  console.log(data);
})();
```

## championOpportunityControllerList

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/opportunities`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerList(input);

  console.log(data);
})();
```

## championOpportunityControllerRecommendations

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/opportunities/recommendations`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerRecommendations(input);

  console.log(data);
})();
```

## championOpportunityControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/{id}`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerGet('id');

  console.log(data);
})();
```

## championOpportunityControllerListPartners

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/{id}/partners`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerListPartners('id');

  console.log(data);
})();
```

## championOpportunityControllerListVariants

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/{id}/variants`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerListVariants('id');

  console.log(data);
})();
```

## championOpportunityControllerGetBookingDetails

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/opportunities/{id}/booking`

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

  const { data } = await pocSdk.championApp.championOpportunityControllerGetBookingDetails('id');

  console.log(data);
})();
```

## championClientControllerGetChampionsConfig

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/organizations/{slug}/config`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| slug | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championClientControllerGetChampionsConfig('slug');

  console.log(data);
})();
```

## championClientControllerGetFaqBySlug

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/organizations/faqs`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championClientControllerGetFaqBySlug();

  console.log(data);
})();
```

## championClientControllerGetDefaultAuthType

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/organizations/auth-type`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championClientControllerGetDefaultAuthType();

  console.log(data);
})();
```

## championScheduleFormQuestionControllerGetScheduleQuestions

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/schedule-form-questions`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championScheduleFormQuestionControllerGetScheduleQuestions();

  console.log(data);
})();
```

## championMasterDataControllerFindByType

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/staticReferences/find`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championMasterDataControllerFindByType();

  console.log(data);
})();
```

## championMasterDataControllerGetByTypeAndDomain

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/staticReferences/domain/{domain}/type/{type}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| domain | string | ✅       |             |
| type   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championMasterDataControllerGetByTypeAndDomain('domain', 'type');

  console.log(data);
})();
```

## championSimpleAuthControllerLogin

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/simple-auth/login`

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

  const { data } = await pocSdk.championApp.championSimpleAuthControllerLogin(input);

  console.log(data);
})();
```

## championOpportunityOutdoorControllerListOutdoorVariants

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/{oppId}/partner/{partnerId}/variants`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| oppId     | string | ✅       |             |
| partnerId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerListOutdoorVariants(
    'oppId',
    'partnerId',
  );

  console.log(data);
})();
```

## championOpportunityOutdoorControllerGetInventorySlot

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/inventory_slot/{id}`

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

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerGetInventorySlot('id');

  console.log(data);
})();
```

## championOpportunityOutdoorControllerGetAvailableSlots

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/{id}/slots`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerGetAvailableSlots();

  console.log(data);
})();
```

## championOpportunityOutdoorControllerGetActivityFormats

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/{slug}/countries`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| slug | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerGetActivityFormats('slug');

  console.log(data);
})();
```

## championOpportunityOutdoorControllerListDurationAndTags

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/tags-and-durations`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerListDurationAndTags();

  console.log(data);
})();
```

## championOpportunityOutdoorControllerList

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/outdoor/opportunities`

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

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerList(input);

  console.log(data);
})();
```

## championOpportunityOutdoorControllerListOutdoorCitiesForCountry

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/cities`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerListOutdoorCitiesForCountry();

  console.log(data);
})();
```

## championOpportunityOutdoorControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/outdoor/opportunities/{id}`

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

  const { data } = await pocSdk.championApp.championOpportunityOutdoorControllerGet('id');

  console.log(data);
})();
```

## championEventOutdoorControllerCreateOutdoorEvent

- HTTP Method: `POST`
- Endpoint: `/v2/champion-app/outdoor/event`

**Parameters**

| Name | Type                                                              | Required | Description       |
| :--- | :---------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateEventFromChampions](../models/CreateEventFromChampions.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateEventFromChampions, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventFromChampions: CreateEventFromChampions = {
    opportunityId: 'opportunityId',
    variantId: 'variantId',
    partnerId: 'partnerId',
    startTimeStamp: 'startTimeStamp',
    endTimeStamp: 'endTimeStamp',
    timezone: 'timezone',
    language: 'language',
    expectedVolunteerCount: 0.57,
  };

  const { data } = await pocSdk.championApp.championEventOutdoorControllerCreateOutdoorEvent(createEventFromChampions);

  console.log(data);
})();
```

## championShipmentControllerUpdateAcknowledgement

- HTTP Method: `PUT`
- Endpoint: `/v2/champion-app/shipment/{id}/acknowledgement`

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

  const { data } = await pocSdk.championApp.championShipmentControllerUpdateAcknowledgement('id', input);

  console.log(data);
})();
```

## etpControllerGetTransformedResponse

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/etp/{eventId}`

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

  const { data } = await pocSdk.championApp.etpControllerGetTransformedResponse('eventId');

  console.log(data);
})();
```

## championInsightsControllerGetInsights

- HTTP Method: `GET`
- Endpoint: `/v2/champion-app/insights`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championApp.championInsightsControllerGetInsights();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
