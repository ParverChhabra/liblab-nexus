# AgentService

A list of all methods in the `AgentService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description |
| :-------------------------------------------------------------------------------------------- | :---------- |
| [agentEventControllerGet](#agenteventcontrollerget)                                           |             |
| [agentEventControllerList](#agenteventcontrollerlist)                                         |             |
| [agentEventControllerGetParticipants](#agenteventcontrollergetparticipants)                   |             |
| [agentEventControllerGetRatings](#agenteventcontrollergetratings)                             |             |
| [agentEventControllerGetCollaterals](#agenteventcontrollergetcollaterals)                     |             |
| [agentEventControllerListShipmentsForEvent](#agenteventcontrollerlistshipmentsforevent)       |             |
| [agentCityControllerGetNearestCities](#agentcitycontrollergetnearestcities)                   |             |
| [agentCountryControllerGet](#agentcountrycontrollerget)                                       |             |
| [agentClientControllerGetPartnerFilter](#agentclientcontrollergetpartnerfilter)               |             |
| [agentClientControllerList](#agentclientcontrollerlist)                                       |             |
| [agentClientControllerGetBranding](#agentclientcontrollergetbranding)                         |             |
| [agentOpportunityControllerGet](#agentopportunitycontrollerget)                               |             |
| [agentChampionControllerList](#agentchampioncontrollerlist)                                   |             |
| [adminHostControllerList](#adminhostcontrollerlist)                                           |             |
| [agentMasterDataControllerFindByDomainAndType](#agentmasterdatacontrollerfindbydomainandtype) |             |
| [agentMasterDataControllerFindByDomain](#agentmasterdatacontrollerfindbydomain)               |             |
| [agentMasterDataControllerFindAll](#agentmasterdatacontrollerfindall)                         |             |
| [agentActivityControllerList](#agentactivitycontrollerlist)                                   |             |
| [agentActivityControllerGet](#agentactivitycontrollerget)                                     |             |
| [agentCatalogueControllerGet](#agentcataloguecontrollerget)                                   |             |
| [agentCatalogueControllerList](#agentcataloguecontrollerlist)                                 |             |

## agentEventControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event/{id}`

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

  const { data } = await pocSdk.agent.agentEventControllerGet('id');

  console.log(data);
})();
```

## agentEventControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentEventControllerList();

  console.log(data);
})();
```

## agentEventControllerGetParticipants

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event/{id}/participants`

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

  const { data } = await pocSdk.agent.agentEventControllerGetParticipants('id');

  console.log(data);
})();
```

## agentEventControllerGetRatings

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event/{id}/ratings`

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

  const { data } = await pocSdk.agent.agentEventControllerGetRatings('id');

  console.log(data);
})();
```

## agentEventControllerGetCollaterals

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event/{id}/collaterals`

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

  const { data } = await pocSdk.agent.agentEventControllerGetCollaterals('id');

  console.log(data);
})();
```

## agentEventControllerListShipmentsForEvent

- HTTP Method: `GET`
- Endpoint: `/v2/agent/event/{id}/shipments`

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

  const { data } = await pocSdk.agent.agentEventControllerListShipmentsForEvent('id');

  console.log(data);
})();
```

## agentCityControllerGetNearestCities

- HTTP Method: `GET`
- Endpoint: `/v2/agent/city/nearest`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentCityControllerGetNearestCities();

  console.log(data);
})();
```

## agentCountryControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/agent/country/{abbr}`

**Parameters**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| abbr | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentCountryControllerGet('abbr');

  console.log(data);
})();
```

## agentClientControllerGetPartnerFilter

- HTTP Method: `GET`
- Endpoint: `/v2/agent/client/{client_id}/partner_filter`

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

  const { data } = await pocSdk.agent.agentClientControllerGetPartnerFilter('client_id');

  console.log(data);
})();
```

## agentClientControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/client`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentClientControllerList();

  console.log(data);
})();
```

## agentClientControllerGetBranding

- HTTP Method: `GET`
- Endpoint: `/v2/agent/client/{client_id}/branding`

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

  const { data } = await pocSdk.agent.agentClientControllerGetBranding('client_id');

  console.log(data);
})();
```

## agentOpportunityControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/agent/opportunity/{id}`

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

  const { data } = await pocSdk.agent.agentOpportunityControllerGet('id');

  console.log(data);
})();
```

## agentChampionControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/champion`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentChampionControllerList();

  console.log(data);
})();
```

## adminHostControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/host`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.adminHostControllerList();

  console.log(data);
})();
```

## agentMasterDataControllerFindByDomainAndType

- HTTP Method: `GET`
- Endpoint: `/v2/agent/master-data/domain/{domain}/type/{type}`

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

  const { data } = await pocSdk.agent.agentMasterDataControllerFindByDomainAndType('domain', 'type');

  console.log(data);
})();
```

## agentMasterDataControllerFindByDomain

- HTTP Method: `GET`
- Endpoint: `/v2/agent/master-data/domain/{domain}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| domain | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentMasterDataControllerFindByDomain('domain');

  console.log(data);
})();
```

## agentMasterDataControllerFindAll

- HTTP Method: `GET`
- Endpoint: `/v2/agent/master-data`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentMasterDataControllerFindAll();

  console.log(data);
})();
```

## agentActivityControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/activity`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.agent.agentActivityControllerList();

  console.log(data);
})();
```

## agentActivityControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/agent/activity/{id}`

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

  const { data } = await pocSdk.agent.agentActivityControllerGet('id');

  console.log(data);
})();
```

## agentCatalogueControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/agent/catalogue/{id}`

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

  const { data } = await pocSdk.agent.agentCatalogueControllerGet('id');

  console.log(data);
})();
```

## agentCatalogueControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/agent/catalogue`

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

  const { data } = await pocSdk.agent.agentCatalogueControllerList({
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

<!-- This file was generated by liblab | https://liblab.com/ -->
