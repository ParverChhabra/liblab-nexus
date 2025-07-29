# HostMobileApiService

A list of all methods in the `HostMobileApiService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                                   | Description |
| :-------------------------------------------------------------------------------------------------------- | :---------- |
| [hostMobileAppAuthControllerSendOtp](#hostmobileappauthcontrollersendotp)                                 |             |
| [hostMobileAppAuthControllerVerifyOtp](#hostmobileappauthcontrollerverifyotp)                             |             |
| [hostControllerMe](#hostcontrollerme)                                                                     |             |
| [hostMobileAppFileControllerGetPresignedUploadUrl](#hostmobileappfilecontrollergetpresigneduploadurl)     |             |
| [hostMobileAppFileControllerGetPresignedDownloadUrl](#hostmobileappfilecontrollergetpresigneddownloadurl) |             |
| [hostMobileAppFileControllerDelete](#hostmobileappfilecontrollerdelete)                                   |             |
| [checklistControllerGetEventChecklist](#checklistcontrollergeteventchecklist)                             |             |
| [hostChecklistResponseControllerCreate](#hostchecklistresponsecontrollercreate)                           |             |
| [hostChecklistResponseControllerGetByEventHostId](#hostchecklistresponsecontrollergetbyeventhostid)       |             |
| [hostChecklistResponseAssetControllerDelete](#hostchecklistresponseassetcontrollerdelete)                 |             |
| [registrationControllerGetAttendeeCount](#registrationcontrollergetattendeecount)                         |             |

## hostMobileAppAuthControllerSendOtp

- HTTP Method: `POST`
- Endpoint: `/v2/host-mobile-api/auth/otp/send`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.hostMobileApi.hostMobileAppAuthControllerSendOtp();

  console.log(data);
})();
```

## hostMobileAppAuthControllerVerifyOtp

- HTTP Method: `POST`
- Endpoint: `/v2/host-mobile-api/auth/otp/verify`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.hostMobileApi.hostMobileAppAuthControllerVerifyOtp();

  console.log(data);
})();
```

## hostControllerMe

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/host/me`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.hostMobileApi.hostControllerMe();

  console.log(data);
})();
```

## hostMobileAppFileControllerGetPresignedUploadUrl

- HTTP Method: `POST`
- Endpoint: `/v2/host-mobile-api/file/signed-url/upload`

**Parameters**

| Name | Type                                                                            | Required | Description       |
| :--- | :------------------------------------------------------------------------------ | :------- | :---------------- |
| body | [CreatePresignedUploadUrlRequest](../models/CreatePresignedUploadUrlRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreatePresignedUploadUrlRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createPresignedUploadUrlRequest: CreatePresignedUploadUrlRequest = {
    bucket: 'bucket',
    key: 'key',
    filePath: 'filePath',
  };

  const { data } = await pocSdk.hostMobileApi.hostMobileAppFileControllerGetPresignedUploadUrl(
    createPresignedUploadUrlRequest,
  );

  console.log(data);
})();
```

## hostMobileAppFileControllerGetPresignedDownloadUrl

- HTTP Method: `POST`
- Endpoint: `/v2/host-mobile-api/file/signed-url/download`

**Parameters**

| Name | Type                                                                                | Required | Description       |
| :--- | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreatePresignedDownloadUrlRequest](../models/CreatePresignedDownloadUrlRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreatePresignedDownloadUrlRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createPresignedDownloadUrlRequest: CreatePresignedDownloadUrlRequest = {
    bucket: 'bucket',
    key: 'key',
    filePath: 'filePath',
  };

  const { data } = await pocSdk.hostMobileApi.hostMobileAppFileControllerGetPresignedDownloadUrl(
    createPresignedDownloadUrlRequest,
  );

  console.log(data);
})();
```

## hostMobileAppFileControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/host-mobile-api/file`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [DeleteFileRequest](../models/DeleteFileRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { DeleteFileRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const deleteFileRequest: DeleteFileRequest = {
    key: 'key',
    bucket: 'bucket',
    filePath: 'filePath',
  };

  const { data } = await pocSdk.hostMobileApi.hostMobileAppFileControllerDelete(deleteFileRequest);

  console.log(data);
})();
```

## checklistControllerGetEventChecklist

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/checklist/type/{type}/event/{eventId}`

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

  const { data } = await pocSdk.hostMobileApi.checklistControllerGetEventChecklist('type', 'eventId');

  console.log(data);
})();
```

## hostChecklistResponseControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/host-mobile-api/host-checklist-response`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateHostChecklistResponseReq](../models/CreateHostChecklistResponseReq.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateHostChecklistResponseReq, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createHostChecklistResponseReq: CreateHostChecklistResponseReq = {
    key: 'key',
    eventId: 'eventId',
    isChecked: true,
  };

  const { data } = await pocSdk.hostMobileApi.hostChecklistResponseControllerCreate(createHostChecklistResponseReq);

  console.log(data);
})();
```

## hostChecklistResponseControllerGetByEventHostId

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/host-checklist-response/event/{id}`

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

  const { data } = await pocSdk.hostMobileApi.hostChecklistResponseControllerGetByEventHostId('id');

  console.log(data);
})();
```

## hostChecklistResponseAssetControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/host-mobile-api/host-checklist-res-assets/{id}`

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

  const { data } = await pocSdk.hostMobileApi.hostChecklistResponseAssetControllerDelete('id');

  console.log(data);
})();
```

## registrationControllerGetAttendeeCount

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/registration/attendee_count/event/{eventId}`

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

  const { data } = await pocSdk.hostMobileApi.registrationControllerGetAttendeeCount('eventId');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
