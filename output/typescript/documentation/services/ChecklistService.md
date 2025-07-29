# ChecklistService

A list of all methods in the `ChecklistService` service. Click on the method name to view detailed information about that method.

| Methods                                                                         | Description |
| :------------------------------------------------------------------------------ | :---------- |
| [checklistControllerCreate](#checklistcontrollercreate)                         |             |
| [checklistControllerCreateMany](#checklistcontrollercreatemany)                 |             |
| [checklistControllerGet](#checklistcontrollerget)                               |             |
| [checklistControllerUpdate](#checklistcontrollerupdate)                         |             |
| [checklistControllerDelete](#checklistcontrollerdelete)                         |             |
| [checklistControllerGetEventChecklist](#checklistcontrollergeteventchecklist)   |             |
| [checklistControllerGetClientChecklist](#checklistcontrollergetclientchecklist) |             |
| [checklistControllerDisable](#checklistcontrollerdisable)                       |             |
| [checklistControllerEnable](#checklistcontrollerenable)                         |             |
| [checklistControllerUpdateSortOrder](#checklistcontrollerupdatesortorder)       |             |

## checklistControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/checklist`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateChecklistRequest](../models/CreateChecklistRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateChecklistRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createChecklistRequest: CreateChecklistRequest = {
    type: 'type',
    clientId: 'clientId',
    opportunityId: 'opportunityId',
    eventId: 'eventId',
    label: 'label',
    description: 'description',
    key: 'key',
    format: 'format',
    section: 'section',
    widgetType: 'widgetType',
  };

  const { data } = await pocSdk.checklist.checklistControllerCreate(createChecklistRequest);

  console.log(data);
})();
```

## checklistControllerCreateMany

- HTTP Method: `POST`
- Endpoint: `/v2/checklist/many`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateManyChecklistRequest](../models/CreateManyChecklistRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateManyChecklistRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createManyChecklistRequest: CreateManyChecklistRequest = {
    type: 'type',
    clientId: 'clientId',
    opportunityId: 'opportunityId',
    eventId: 'eventId',
    label: 'label',
    description: 'description',
    formats: ['formats'],
    section: 'section',
    key: 'key',
    isDefault: true,
  };

  const { data } = await pocSdk.checklist.checklistControllerCreateMany(createManyChecklistRequest);

  console.log(data);
})();
```

## checklistControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/checklist/{id}`

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

  const { data } = await pocSdk.checklist.checklistControllerGet('id');

  console.log(data);
})();
```

## checklistControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/checklist/{id}`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [UpdateChecklistRequest](../models/UpdateChecklistRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateChecklistRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateChecklistRequest: UpdateChecklistRequest = {
    label: 'label',
    description: 'description',
  };

  const { data } = await pocSdk.checklist.checklistControllerUpdate(updateChecklistRequest);

  console.log(data);
})();
```

## checklistControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/checklist/{id}`

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

  const { data } = await pocSdk.checklist.checklistControllerDelete('id');

  console.log(data);
})();
```

## checklistControllerGetEventChecklist

- HTTP Method: `GET`
- Endpoint: `/v2/checklist/type/{type}/event/{eventId}`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| type    | string | ✅       |             |
| eventId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.checklist.checklistControllerGetEventChecklist('type', 'eventId');

  console.log(data);
})();
```

## checklistControllerGetClientChecklist

- HTTP Method: `GET`
- Endpoint: `/v2/checklist/client/{clientId}/format/{format}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| format | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.checklist.checklistControllerGetClientChecklist('format');

  console.log(data);
})();
```

## checklistControllerDisable

- HTTP Method: `PUT`
- Endpoint: `/v2/checklist/{id}/disable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.checklist.checklistControllerDisable();

  console.log(data);
})();
```

## checklistControllerEnable

- HTTP Method: `PUT`
- Endpoint: `/v2/checklist/{id}/enable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.checklist.checklistControllerEnable();

  console.log(data);
})();
```

## checklistControllerUpdateSortOrder

- HTTP Method: `PUT`
- Endpoint: `/v2/checklist/client/{clientId}/sort-order`

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

  const { data } = await pocSdk.checklist.checklistControllerUpdateSortOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
