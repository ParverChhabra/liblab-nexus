# FaqService

A list of all methods in the `FaqService` service. Click on the method name to view detailed information about that method.

| Methods                                                                             | Description |
| :---------------------------------------------------------------------------------- | :---------- |
| [faqControllerGetFaqsByLocale](#faqcontrollergetfaqsbylocale)                       |             |
| [faqControllerGetFaqsForClientId](#faqcontrollergetfaqsforclientid)                 |             |
| [faqControllerGet](#faqcontrollerget)                                               |             |
| [faqControllerUpdate](#faqcontrollerupdate)                                         |             |
| [faqControllerRemove](#faqcontrollerremove)                                         |             |
| [faqControllerCreate](#faqcontrollercreate)                                         |             |
| [faqControllerCreateDefaultFaq](#faqcontrollercreatedefaultfaq)                     |             |
| [faqControllerAttachDefaultBanners](#faqcontrollerattachdefaultbanners)             |             |
| [faqControllerAddScheduleQuestionVariant](#faqcontrolleraddschedulequestionvariant) |             |
| [faqControllerUpdateSortOrder](#faqcontrollerupdatesortorder)                       |             |

## faqControllerGetFaqsByLocale

- HTTP Method: `GET`
- Endpoint: `/v2/faq/client/{clientId}/locale/{locale}`

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

  const { data } = await pocSdk.faq.faqControllerGetFaqsByLocale('locale');

  console.log(data);
})();
```

## faqControllerGetFaqsForClientId

- HTTP Method: `GET`
- Endpoint: `/v2/faq/client/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.faq.faqControllerGetFaqsForClientId();

  console.log(data);
})();
```

## faqControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/faq/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.faq.faqControllerGet();

  console.log(data);
})();
```

## faqControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/faq/{id}`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [UpdateFaqRequest](../models/UpdateFaqRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateFaqRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateFaqRequest: UpdateFaqRequest = {
    hidden: true,
    faqVariants: ['faqVariants'],
  };

  const { data } = await pocSdk.faq.faqControllerUpdate(updateFaqRequest);

  console.log(data);
})();
```

## faqControllerRemove

- HTTP Method: `DELETE`
- Endpoint: `/v2/faq/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.faq.faqControllerRemove();

  console.log(data);
})();
```

## faqControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/faq`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [CreateFaqRequest](../models/CreateFaqRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateFaqRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createFaqRequest: CreateFaqRequest = {
    clientId: {},
    hidden: {},
    faqVariants: ['faqVariants'],
  };

  const { data } = await pocSdk.faq.faqControllerCreate(createFaqRequest);

  console.log(data);
})();
```

## faqControllerCreateDefaultFaq

- HTTP Method: `POST`
- Endpoint: `/v2/faq/default`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateDefaultFaqRequest](../models/CreateDefaultFaqRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateDefaultFaqRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createDefaultFaqRequest: CreateDefaultFaqRequest = {
    hidden: {},
    faqVariants: ['faqVariants'],
  };

  const { data } = await pocSdk.faq.faqControllerCreateDefaultFaq(createDefaultFaqRequest);

  console.log(data);
})();
```

## faqControllerAttachDefaultBanners

- HTTP Method: `POST`
- Endpoint: `/v2/faq/attach-default/{clientId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.faq.faqControllerAttachDefaultBanners();

  console.log(data);
})();
```

## faqControllerAddScheduleQuestionVariant

- HTTP Method: `POST`
- Endpoint: `/v2/faq/{faqId}/variant`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateFaqVariantRequest](../models/CreateFaqVariantRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateFaqVariantRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createFaqVariantRequest: CreateFaqVariantRequest = {
    locale: 'locale',
    question: 'question',
    answer: 'answer',
  };

  const { data } = await pocSdk.faq.faqControllerAddScheduleQuestionVariant(createFaqVariantRequest);

  console.log(data);
})();
```

## faqControllerUpdateSortOrder

- HTTP Method: `PUT`
- Endpoint: `/v2/faq/client/{clientId}/sort-order`

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

  const { data } = await pocSdk.faq.faqControllerUpdateSortOrder(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
