# ChampionService

A list of all methods in the `ChampionService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                         | Description |
| :---------------------------------------------------------------------------------------------- | :---------- |
| [championPublicRouteControllerCreate](#championpublicroutecontrollercreate)                     |             |
| [championPublicRouteControllerRemove](#championpublicroutecontrollerremove)                     |             |
| [championPublicRouteControllerRetrieveByClient](#championpublicroutecontrollerretrievebyclient) |             |
| [championPublicRouteControllerAttachDefault](#championpublicroutecontrollerattachdefault)       |             |
| [championPublicRouteControllerRemoveByRouteId](#championpublicroutecontrollerremovebyrouteid)   |             |
| [championControllerListHosts](#championcontrollerlisthosts)                                     |             |
| [championControllerListPartners](#championcontrollerlistpartners)                               |             |
| [championControllerGet](#championcontrollerget)                                                 |             |
| [championControllerUpdate](#championcontrollerupdate)                                           |             |
| [championControllerDelete](#championcontrollerdelete)                                           |             |
| [championControllerList](#championcontrollerlist)                                               |             |
| [championControllerCreate](#championcontrollercreate)                                           |             |
| [championControllerAddAddressChampion](#championcontrolleraddaddresschampion)                   |             |
| [championControllerUpdateAddress](#championcontrollerupdateaddress)                             |             |
| [championControllerRemoveAddress](#championcontrollerremoveaddress)                             |             |
| [championControllerUpdateOfficeAddress](#championcontrollerupdateofficeaddress)                 |             |
| [championControllerAddHost](#championcontrolleraddhost)                                         |             |
| [championControllerDeleteHost](#championcontrollerdeletehost)                                   |             |
| [championControllerAddPartner](#championcontrolleraddpartner)                                   |             |
| [championControllerDeletePartner](#championcontrollerdeletepartner)                             |             |
| [championControllerAddKeyVolunteeringMoment](#championcontrolleraddkeyvolunteeringmoment)       |             |
| [championControllerDeleteKeyVolunteeringMoment](#championcontrollerdeletekeyvolunteeringmoment) |             |

## championPublicRouteControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/champion/public-route`

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

  const { data } = await pocSdk.champion.championPublicRouteControllerCreate(input);

  console.log(data);
})();
```

## championPublicRouteControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/public-route/{id}`

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

  const { data } = await pocSdk.champion.championPublicRouteControllerRemove('id');

  console.log(data);
})();
```

## championPublicRouteControllerRetrieveByClient

- HTTP Method: `GET`
- Endpoint: `/v2/champion/public-route/client/{clientId}`

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

  const { data } = await pocSdk.champion.championPublicRouteControllerRetrieveByClient('clientId');

  console.log(data);
})();
```

## championPublicRouteControllerAttachDefault

- HTTP Method: `POST`
- Endpoint: `/v2/champion/public-route/client/{clientId}/default`

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

  const { data } = await pocSdk.champion.championPublicRouteControllerAttachDefault('clientId');

  console.log(data);
})();
```

## championPublicRouteControllerRemoveByRouteId

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/public-route/client/{clientId}/route/{routeId}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| clientId | string | ✅       |             |
| routeId  | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championPublicRouteControllerRemoveByRouteId('clientId', 'routeId');

  console.log(data);
})();
```

## championControllerListHosts

- HTTP Method: `GET`
- Endpoint: `/v2/champion/pref_host`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerListHosts();

  console.log(data);
})();
```

## championControllerListPartners

- HTTP Method: `GET`
- Endpoint: `/v2/champion/pref_partner`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerListPartners();

  console.log(data);
})();
```

## championControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/champion/{id}`

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

  const { data } = await pocSdk.champion.championControllerGet('id');

  console.log(data);
})();
```

## championControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/champion/{id}`

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

  const { data } = await pocSdk.champion.championControllerUpdate(input);

  console.log(data);
})();
```

## championControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/{id}`

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

  const { data } = await pocSdk.champion.championControllerDelete('id');

  console.log(data);
})();
```

## championControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/champion`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerList();

  console.log(data);
})();
```

## championControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/champion`

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

  const { data } = await pocSdk.champion.championControllerCreate(input);

  console.log(data);
})();
```

## championControllerAddAddressChampion

- HTTP Method: `POST`
- Endpoint: `/v2/champion/{id}/address`

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

  const { data } = await pocSdk.champion.championControllerAddAddressChampion('id', input);

  console.log(data);
})();
```

## championControllerUpdateAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/champion/{id}/address/{addressId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| body      | any    | ✅       | The request body. |
| id        | string | ✅       |                   |
| addressId | string | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const input = {};

  const { data } = await pocSdk.champion.championControllerUpdateAddress('id', 'addressId', input);

  console.log(data);
})();
```

## championControllerRemoveAddress

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/{id}/address/{addressId}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| id        | string | ✅       |             |
| addressId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerRemoveAddress('id', 'addressId');

  console.log(data);
})();
```

## championControllerUpdateOfficeAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/champion/{id}/office_address`

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

  const { data } = await pocSdk.champion.championControllerUpdateOfficeAddress('id', input);

  console.log(data);
})();
```

## championControllerAddHost

- HTTP Method: `POST`
- Endpoint: `/v2/champion/{id}/pref_host/{host_id}`

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

  const { data } = await pocSdk.champion.championControllerAddHost('id', 'host_id');

  console.log(data);
})();
```

## championControllerDeleteHost

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/{id}/pref_host/{host_id}`

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

  const { data } = await pocSdk.champion.championControllerDeleteHost('id', 'host_id');

  console.log(data);
})();
```

## championControllerAddPartner

- HTTP Method: `POST`
- Endpoint: `/v2/champion/{id}/pref_partner/{partner_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| id        | string | ✅       |             |
| partnerId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerAddPartner('id', 'partner_id');

  console.log(data);
})();
```

## championControllerDeletePartner

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/{id}/pref_partner/{partner_id}`

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

  const { data } = await pocSdk.champion.championControllerDeletePartner('id', 'host_id');

  console.log(data);
})();
```

## championControllerAddKeyVolunteeringMoment

- HTTP Method: `POST`
- Endpoint: `/v2/champion/{id}/key-volunteering-moments`

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

  const { data } = await pocSdk.champion.championControllerAddKeyVolunteeringMoment('id', input);

  console.log(data);
})();
```

## championControllerDeleteKeyVolunteeringMoment

- HTTP Method: `DELETE`
- Endpoint: `/v2/champion/{id}/key-volunteering-moments/{momentId}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| id       | string | ✅       |             |
| momentId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.champion.championControllerDeleteKeyVolunteeringMoment('id', 'momentId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
