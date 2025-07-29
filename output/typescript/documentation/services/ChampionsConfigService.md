# ChampionsConfigService

A list of all methods in the `ChampionsConfigService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description |
| :------------------------------------------------------------------ | :---------- |
| [championsConfigControllerCreate](#championsconfigcontrollercreate) |             |
| [championsConfigControllerUpdate](#championsconfigcontrollerupdate) |             |
| [championsConfigControllerGet](#championsconfigcontrollerget)       |             |
| [championsConfigControllerNewSsp](#championsconfigcontrollernewssp) |             |

## championsConfigControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/champions-config`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateChampionsConfigRequest](../models/CreateChampionsConfigRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateChampionsConfigRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createChampionsConfigRequest: CreateChampionsConfigRequest = {
    slug: 'slug',
    allowedConfirmItems: 'allowedConfirmItems',
    inPersonTat: {},
    virtualTat: {},
    charityFormLink: 'charityFormLink',
    analyticsUrl: 'analyticsUrl',
    portalUrl: 'portalUrl',
    customBookingUrl: 'customBookingUrl',
    clientId: {},
    showLogoOnChampionsPage: true,
    showGptOnPostBookingPage: true,
    showGptOnDashboardPage: true,
    showGptOnDetailsPage: true,
    allowedLastBookingDate: 'allowedLastBookingDate',
    allowedFirstBookingDate: 'allowedFirstBookingDate',
    showCostOnChampionsPage: true,
    defaultEventFormat: 'defaultEventFormat',
    isAsyncPossible: true,
    isGridViewToggleEnabled: true,
    isInventoryBasedOutdoorEnabled: true,
    showPreEventFormOnEtp: true,
    showOnlyAggregators: true,
  };

  const { data } = await pocSdk.championsConfig.championsConfigControllerCreate(createChampionsConfigRequest);

  console.log(data);
})();
```

## championsConfigControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/champions-config/{id}`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateChampionsConfigRequest](../models/UpdateChampionsConfigRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateChampionsConfigRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateChampionsConfigRequest: UpdateChampionsConfigRequest = {
    slug: 'slug',
    allowedConfirmItems: 'allowedConfirmItems',
    inPersonTat: 2.39,
    virtualTat: 0.28,
    charityFormLink: 'charityFormLink',
    analyticsUrl: 'analyticsUrl',
    portalUrl: 'portalUrl',
    customBookingUrl: 'customBookingUrl',
    showLogoOnChampionsPage: true,
    showGptOnPostBookingPage: true,
    showGptOnDashboardPage: true,
    showGptOnDetailsPage: true,
    allowedLastBookingDate: 'allowedLastBookingDate',
    allowedFirstBookingDate: 'allowedFirstBookingDate',
    showCostOnChampionsPage: true,
    defaultEventFormat: 'defaultEventFormat',
    isAsyncPossible: true,
    isGridViewToggleEnabled: true,
    isInventoryBasedOutdoorEnabled: true,
    showPreEventFormOnEtp: true,
    showOnlyAggregators: true,
  };

  const { data } = await pocSdk.championsConfig.championsConfigControllerUpdate(updateChampionsConfigRequest);

  console.log(data);
})();
```

## championsConfigControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/champions-config/client/{clientId}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championsConfig.championsConfigControllerGet('clientId');

  console.log(data);
})();
```

## championsConfigControllerNewSsp

- HTTP Method: `POST`
- Endpoint: `/v2/champions-config/new-ssp/{clientId}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championsConfig.championsConfigControllerNewSsp('clientId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
