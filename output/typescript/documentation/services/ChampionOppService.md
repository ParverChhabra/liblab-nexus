# ChampionOppService

A list of all methods in the `ChampionOppService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                 | Description |
| :------------------------------------------------------------------------------------------------------ | :---------- |
| [championOppControllerList](#championoppcontrollerlist)                                                 |             |
| [championOppControllerCreate](#championoppcontrollercreate)                                             |             |
| [championOppControllerGetFormatCounts](#championoppcontrollergetformatcounts)                           |             |
| [championOppControllerGetChampionOppCountByCountry](#championoppcontrollergetchampionoppcountbycountry) |             |
| [championOppControllerGetChampionOppCountByCity](#championoppcontrollergetchampionoppcountbycity)       |             |
| [championOppControllerCreateMany](#championoppcontrollercreatemany)                                     |             |
| [championOppControllerPreviewValidatedRequests](#championoppcontrollerpreviewvalidatedrequests)         |             |
| [championOppControllerUpdate](#championoppcontrollerupdate)                                             |             |
| [championOppControllerRemove](#championoppcontrollerremove)                                             |             |
| [championOppControllerCreateChampionOppCity](#championoppcontrollercreatechampionoppcity)               |             |
| [championOppControllerUpdateOrders](#championoppcontrollerupdateorders)                                 |             |
| [championOppControllerRemoveChampionOppCity](#championoppcontrollerremovechampionoppcity)               |             |
| [championOppControllerRemoveByCountryFormat](#championoppcontrollerremovebycountryformat)               |             |
| [championOppControllerRemoveByCountry](#championoppcontrollerremovebycountry)                           |             |

## championOppControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/champion-opp`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerList();

  console.log(data);
})();
```

## championOppControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/champion-opp`

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

  const { data } = await pocSdk.championOpp.championOppControllerCreate(input);

  console.log(data);
})();
```

## championOppControllerGetFormatCounts

- HTTP Method: `GET`
- Endpoint: `/v2/champion-opp/client/{clientId}/get-format-count`

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

  const { data } = await pocSdk.championOpp.championOppControllerGetFormatCounts('clientId');

  console.log(data);
})();
```

## championOppControllerGetChampionOppCountByCountry

- HTTP Method: `GET`
- Endpoint: `/v2/champion-opp/client/{clientId}/format/{format}/get-country-count`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |
| format   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerGetChampionOppCountByCountry('clientId', 'format');

  console.log(data);
})();
```

## championOppControllerGetChampionOppCountByCity

- HTTP Method: `GET`
- Endpoint: `/v2/champion-opp/client/{clientId}/format/{format}/country/{countryAbbr}/get-city-count`

**Parameters**

| Name        | Type   | Required | Description |
| :---------- | :----- | :------- | :---------- |
| clientId    | string | ✅       |             |
| format      | string | ✅       |             |
| countryAbbr | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerGetChampionOppCountByCity(
    'clientId',
    'format',
    'countryAbbr',
  );

  console.log(data);
})();
```

## championOppControllerCreateMany

- HTTP Method: `POST`
- Endpoint: `/v2/champion-opp/client/{clientId}/create-many`

**Parameters**

| Name     | Type   | Required | Description       |
| :------- | :----- | :------- | :---------------- |
| body     | any    | ✅       | The request body. |
| clientId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.championOpp.championOppControllerCreateMany('clientId', input);

  console.log(data);
})();
```

## championOppControllerPreviewValidatedRequests

- HTTP Method: `POST`
- Endpoint: `/v2/champion-opp/client/{clientId}/preview`

**Parameters**

| Name     | Type   | Required | Description       |
| :------- | :----- | :------- | :---------------- |
| body     | any    | ✅       | The request body. |
| clientId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.championOpp.championOppControllerPreviewValidatedRequests('clientId', input);

  console.log(data);
})();
```

## championOppControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/champion-opp/{id}`

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

  const { data } = await pocSdk.championOpp.championOppControllerUpdate('id', input);

  console.log(data);
})();
```

## championOppControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion-opp/{id}`

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

  const { data } = await pocSdk.championOpp.championOppControllerRemove('id');

  console.log(data);
})();
```

## championOppControllerCreateChampionOppCity

- HTTP Method: `POST`
- Endpoint: `/v2/champion-opp/city`

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

  const { data } = await pocSdk.championOpp.championOppControllerCreateChampionOppCity(input);

  console.log(data);
})();
```

## championOppControllerUpdateOrders

- HTTP Method: `PUT`
- Endpoint: `/v2/champion-opp/client/{clientId}/update-order`

**Parameters**

| Name     | Type   | Required | Description       |
| :------- | :----- | :------- | :---------------- |
| body     | any    | ✅       | The request body. |
| clientId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.championOpp.championOppControllerUpdateOrders('clientId', input);

  console.log(data);
})();
```

## championOppControllerRemoveChampionOppCity

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion-opp/city/{champOppCityId}`

**Parameters**

| Name           | Type   | Required | Description |
| :------------- | :----- | :------- | :---------- |
| champOppCityId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerRemoveChampionOppCity('champOppCityId');

  console.log(data);
})();
```

## championOppControllerRemoveByCountryFormat

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion-opp/client/{clientId}/country/{countryAbbr}/format/{format}`

**Parameters**

| Name        | Type   | Required | Description |
| :---------- | :----- | :------- | :---------- |
| clientId    | string | ✅       |             |
| countryAbbr | string | ✅       |             |
| format      | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerRemoveByCountryFormat(
    'clientId',
    'countryAbbr',
    'format',
  );

  console.log(data);
})();
```

## championOppControllerRemoveByCountry

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion-opp/client/{clientId}/format/{format}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |
| format   | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.championOpp.championOppControllerRemoveByCountry('clientId', 'format');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
