# WebhookService

A list of all methods in the `WebhookService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description |
| :-------------------------------------------------------------------------- | :---------- |
| [webhookControllerCreate](#webhookcontrollercreate)                         |             |
| [webhookControllerGet](#webhookcontrollerget)                               |             |
| [webhookControllerUpdate](#webhookcontrollerupdate)                         |             |
| [webhookControllerFind](#webhookcontrollerfind)                             |             |
| [webhookControllerDisable](#webhookcontrollerdisable)                       |             |
| [webhookControllerEnable](#webhookcontrollerenable)                         |             |
| [webhookControllerGetStatus](#webhookcontrollergetstatus)                   |             |
| [webhookControllerTriggerCvpWebhooks](#webhookcontrollertriggercvpwebhooks) |             |

## webhookControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/webhook`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [CreateWebhookRequest](../models/CreateWebhookRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateWebhookRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const apiVersion = 'V1';

  const createWebhookRequest: CreateWebhookRequest = {
    url: 'url',
    clientVolunteeringPlatformId: 'clientVolunteeringPlatformId',
    apiVersion: apiVersion,
    authStrategy: {},
    authCredentials: {},
  };

  const { data } = await pocSdk.webhook.webhookControllerCreate(createWebhookRequest);

  console.log(data);
})();
```

## webhookControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/webhook/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.webhook.webhookControllerGet();

  console.log(data);
})();
```

## webhookControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/webhook/{id}`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [UpdateWebhookRequest](../models/UpdateWebhookRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateWebhookRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateWebhookRequest: UpdateWebhookRequest = {
    url: 'url',
    apiVersion: 'apiVersion',
    authStrategy: 'authStrategy',
    authCredentials: {},
  };

  const { data } = await pocSdk.webhook.webhookControllerUpdate(updateWebhookRequest);

  console.log(data);
})();
```

## webhookControllerFind

- HTTP Method: `POST`
- Endpoint: `/v2/webhook/find`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.webhook.webhookControllerFind();

  console.log(data);
})();
```

## webhookControllerDisable

- HTTP Method: `PUT`
- Endpoint: `/v2/webhook/{id}/disable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.webhook.webhookControllerDisable();

  console.log(data);
})();
```

## webhookControllerEnable

- HTTP Method: `PUT`
- Endpoint: `/v2/webhook/{id}/enable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.webhook.webhookControllerEnable();

  console.log(data);
})();
```

## webhookControllerGetStatus

- HTTP Method: `GET`
- Endpoint: `/v2/webhook/{id}/status`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.webhook.webhookControllerGetStatus();

  console.log(data);
})();
```

## webhookControllerTriggerCvpWebhooks

- HTTP Method: `POST`
- Endpoint: `/v2/webhook/trigger/event/{eventId}`

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

  const { data } = await pocSdk.webhook.webhookControllerTriggerCvpWebhooks('eventId', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
