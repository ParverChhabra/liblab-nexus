# ActivityVariantService

A list of all methods in the `ActivityVariantService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description |
| :------------------------------------------------------------------------------------ | :---------- |
| [activityVariantControllerCreate](#activityvariantcontrollercreate)                   |             |
| [activityVariantControllerGet](#activityvariantcontrollerget)                         |             |
| [activityVariantControllerUpdate](#activityvariantcontrollerupdate)                   |             |
| [activityVariantControllerDelete](#activityvariantcontrollerdelete)                   |             |
| [activityVariantControllerDisable](#activityvariantcontrollerdisable)                 |             |
| [activityVariantControllerGetAllTemplates](#activityvariantcontrollergetalltemplates) |             |
| [activityVariantControllerAddTemplate](#activityvariantcontrolleraddtemplate)         |             |
| [activityVariantControllerDeleteTemplate](#activityvariantcontrollerdeletetemplate)   |             |

## activityVariantControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/activity-variant`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerCreate(input);

  console.log(data);
})();
```

## activityVariantControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/activity-variant/{id}`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerGet('id');

  console.log(data);
})();
```

## activityVariantControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/activity-variant/{id}`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerUpdate('id', input);

  console.log(data);
})();
```

## activityVariantControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/activity-variant/{id}`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerDelete('id');

  console.log(data);
})();
```

## activityVariantControllerDisable

- HTTP Method: `POST`
- Endpoint: `/v2/activity-variant/{id}/disable`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerDisable('id', input);

  console.log(data);
})();
```

## activityVariantControllerGetAllTemplates

- HTTP Method: `GET`
- Endpoint: `/v2/activity-variant/{id}/templates`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerGetAllTemplates('id');

  console.log(data);
})();
```

## activityVariantControllerAddTemplate

- HTTP Method: `POST`
- Endpoint: `/v2/activity-variant/{id}/templates`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerAddTemplate('id', input);

  console.log(data);
})();
```

## activityVariantControllerDeleteTemplate

- HTTP Method: `DELETE`
- Endpoint: `/v2/activity-variant/templates/{id}`

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

  const { data } = await pocSdk.activityVariant.activityVariantControllerDeleteTemplate('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
