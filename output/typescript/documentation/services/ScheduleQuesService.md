# ScheduleQuesService

A list of all methods in the `ScheduleQuesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                             | Description |
| :------------------------------------------------------------------------------------------------------------------ | :---------- |
| [scheduleQuestionControllerGetBannersByLocale](#schedulequestioncontrollergetbannersbylocale)                       |             |
| [scheduleQuestionControllerGetQuestionsForClientId](#schedulequestioncontrollergetquestionsforclientid)             |             |
| [scheduleQuestionControllerGet](#schedulequestioncontrollerget)                                                     |             |
| [scheduleQuestionControllerUpdate](#schedulequestioncontrollerupdate)                                               |             |
| [scheduleQuestionControllerRemove](#schedulequestioncontrollerremove)                                               |             |
| [scheduleQuestionControllerCreate](#schedulequestioncontrollercreate)                                               |             |
| [scheduleQuestionControllerCreateDefaultScheduleQuestion](#schedulequestioncontrollercreatedefaultschedulequestion) |             |
| [scheduleQuestionControllerAttachDefaultBanners](#schedulequestioncontrollerattachdefaultbanners)                   |             |
| [scheduleQuestionControllerAddScheduleQuestionVariant](#schedulequestioncontrolleraddschedulequestionvariant)       |             |
| [scheduleQuestionControllerUpdateSortOrder](#schedulequestioncontrollerupdatesortorder)                             |             |

## scheduleQuestionControllerGetBannersByLocale

- HTTP Method: `GET`
- Endpoint: `/v2/schedule-ques/client/{clientId}/locale/{locale}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| locale | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerGetBannersByLocale('locale');

  console.log(data);
})();
```

## scheduleQuestionControllerGetQuestionsForClientId

- HTTP Method: `GET`
- Endpoint: `/v2/schedule-ques/client/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerGetQuestionsForClientId();

  console.log(data);
})();
```

## scheduleQuestionControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/schedule-ques/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerGet();

  console.log(data);
})();
```

## scheduleQuestionControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/schedule-ques/{id}`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [UpdateQuestionRequest](../models/UpdateQuestionRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateQuestionRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateQuestionRequest: UpdateQuestionRequest = {
    type: 'type',
    eventLocation: 'eventLocation',
    fieldName: 'fieldName',
    isRequired: true,
    hidden: {},
    validationMetadata: {},
    variants: ['variants'],
  };

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerUpdate(updateQuestionRequest);

  console.log(data);
})();
```

## scheduleQuestionControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/schedule-ques/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerRemove();

  console.log(data);
})();
```

## scheduleQuestionControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/schedule-ques`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreateQuestionRequest](../models/CreateQuestionRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateQuestionRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createQuestionRequest: CreateQuestionRequest = {
    clientId: {},
    type: 'type',
    eventLocation: 'eventLocation',
    fieldName: 'fieldName',
    isRequired: true,
    validationMetadata: {},
    variants: ['variants'],
  };

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerCreate(createQuestionRequest);

  console.log(data);
})();
```

## scheduleQuestionControllerCreateDefaultScheduleQuestion

- HTTP Method: `POST`
- Endpoint: `/v2/schedule-ques/default`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateDefaultQuestionRequest](../models/CreateDefaultQuestionRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateDefaultQuestionRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createDefaultQuestionRequest: CreateDefaultQuestionRequest = {
    type: 'type',
    eventLocation: 'eventLocation',
    fieldName: 'fieldName',
    isRequired: true,
    isDefault: {},
    canBeHidden: {},
    hidden: {},
    validationMetadata: {},
    variants: ['variants'],
  };

  const { data } =
    await pocSdk.scheduleQues.scheduleQuestionControllerCreateDefaultScheduleQuestion(createDefaultQuestionRequest);

  console.log(data);
})();
```

## scheduleQuestionControllerAttachDefaultBanners

- HTTP Method: `POST`
- Endpoint: `/v2/schedule-ques/attach-default/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerAttachDefaultBanners();

  console.log(data);
})();
```

## scheduleQuestionControllerAddScheduleQuestionVariant

- HTTP Method: `POST`
- Endpoint: `/v2/schedule-ques/{quesId}/variant`

**Parameters**

| Name | Type                                                                      | Required | Description       |
| :--- | :------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateQuestionVariantRequest](../models/CreateQuestionVariantRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateQuestionVariantRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createQuestionVariantRequest: CreateQuestionVariantRequest = {
    locale: 'locale',
    question: 'question',
    placeholder: 'placeholder',
    options: 'options',
  };

  const { data } =
    await pocSdk.scheduleQues.scheduleQuestionControllerAddScheduleQuestionVariant(createQuestionVariantRequest);

  console.log(data);
})();
```

## scheduleQuestionControllerUpdateSortOrder

- HTTP Method: `PUT`
- Endpoint: `/v2/schedule-ques/client/{clientId}/sort-order`

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

  const { data } = await pocSdk.scheduleQues.scheduleQuestionControllerUpdateSortOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
