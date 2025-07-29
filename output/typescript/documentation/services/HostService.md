# HostService

A list of all methods in the `HostService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description |
| :-------------------------------------------------------------------------------------------- | :---------- |
| [hostControllerList](#hostcontrollerlist)                                                     |             |
| [hostControllerCreate](#hostcontrollercreate)                                                 |             |
| [hostControllerGet](#hostcontrollerget)                                                       |             |
| [hostControllerUpdate](#hostcontrollerupdate)                                                 |             |
| [hostControllerDelete](#hostcontrollerdelete)                                                 |             |
| [hostControllerAddShippingAddress](#hostcontrolleraddshippingaddress)                         |             |
| [hostControllerUpdateShippingAddress](#hostcontrollerupdateshippingaddress)                   |             |
| [hostControllerRemoveDeleteAddress](#hostcontrollerremovedeleteaddress)                       |             |
| [hostControllerDisable](#hostcontrollerdisable)                                               |             |
| [hostControllerAddBeneficiary](#hostcontrolleraddbeneficiary)                                 |             |
| [hostControllerUpdateBeneficiary](#hostcontrollerupdatebeneficiary)                           |             |
| [hostControllerDeleteBeneficiary](#hostcontrollerdeletebeneficiary)                           |             |
| [hostAppEventControllerList](#hostappeventcontrollerlist)                                     |             |
| [hostAppEventControllerGet](#hostappeventcontrollerget)                                       |             |
| [hostAppEventControllerGetFeedback](#hostappeventcontrollergetfeedback)                       |             |
| [hostAppEventControllerCreateFeedback](#hostappeventcontrollercreatefeedback)                 |             |
| [hostAppFileControllerGetPresignedUploadUrl](#hostappfilecontrollergetpresigneduploadurl)     |             |
| [hostAppFileControllerGetPresignedDownloadUrl](#hostappfilecontrollergetpresigneddownloadurl) |             |
| [hostAppFileControllerDelete](#hostappfilecontrollerdelete)                                   |             |
| [hostAppHostControllerList](#hostapphostcontrollerlist)                                       |             |
| [hostAppHostControllerMe](#hostapphostcontrollerme)                                           |             |
| [hostAppHostControllerGet](#hostapphostcontrollerget)                                         |             |
| [hostAppHostControllerAddShippingAddress](#hostapphostcontrolleraddshippingaddress)           |             |
| [hostAppHostControllerUpdateShippingAddress](#hostapphostcontrollerupdateshippingaddress)     |             |
| [hostAppHostControllerRemoveDeleteAddress](#hostapphostcontrollerremovedeleteaddress)         |             |
| [hostMobileAppEventControllerList](#hostmobileappeventcontrollerlist)                         |             |
| [hostMobileAppEventControllerGet](#hostmobileappeventcontrollerget)                           |             |

## hostControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/host`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostControllerList();

  console.log(data);
})();
```

## hostControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/host`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [CreateHostRequest](../models/CreateHostRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateHostRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createHostRequest: CreateHostRequest = {
    email: 'email',
    secondaryEmails: 'secondaryEmails',
    description: 'description',
    firstName: 'firstName',
    lastName: 'lastName',
    communicationAddress: {},
    displayName: 'displayName',
    pronouns: 'pronouns',
    funFact: 'funFact',
    accomplishments: 'accomplishments',
    languages: 'languages',
    countries: 'countries',
    level: 'level',
    focusAreas: 'focusAreas',
    activityFormatAvailability: 'activityFormatAvailability',
    nationality: 'nationality',
    primaryLanguage: 'primaryLanguage',
    preferredActivityTypes: 'preferredActivityTypes',
    resumeUrl: 'resumeUrl',
    comments: 'comments',
    isdCode: 'isdCode',
    phoneNumber: 'phoneNumber',
    profileImageUrl: 'profileImageUrl',
    dateOfBirth: 'dateOfBirth',
    countryId: 'countryId',
    cityId: 'cityId',
    meetingPlatforms: ['meetingPlatforms'],
  };

  const { data } = await pocSdk.host.hostControllerCreate(createHostRequest);

  console.log(data);
})();
```

## hostControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/host/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostControllerGet();

  console.log(data);
})();
```

## hostControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/host/{id}`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [UpdateHostRequest](../models/UpdateHostRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateHostRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateHostRequest: UpdateHostRequest = {
    description: 'description',
    secondaryEmails: 'secondaryEmails',
    profileImageUrl: 'profileImageUrl',
    meetingUrl: 'meetingUrl',
    communicationAddress: {},
    firstName: 'firstName',
    lastName: 'lastName',
    displayName: 'displayName',
    pronouns: 'pronouns',
    funFact: 'funFact',
    accomplishments: 'accomplishments',
    languages: 'languages',
    countries: 'countries',
    level: 'level',
    focusAreas: 'focusAreas',
    activityFormatAvailability: 'activityFormatAvailability',
    nationality: 'nationality',
    primaryLanguage: 'primaryLanguage',
    preferredActivityTypes: 'preferredActivityTypes',
    resumeUrl: 'resumeUrl',
    comments: 'comments',
    isdCode: 'isdCode',
    phoneNumber: 'phoneNumber',
    dateOfBirth: 'dateOfBirth',
    countryId: 'countryId',
    cityId: 'cityId',
    meetingPlatforms: ['meetingPlatforms'],
  };

  const { data } = await pocSdk.host.hostControllerUpdate(updateHostRequest);

  console.log(data);
})();
```

## hostControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/host/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostControllerDelete();

  console.log(data);
})();
```

## hostControllerAddShippingAddress

- HTTP Method: `POST`
- Endpoint: `/v2/host/{id}/shipping-address`

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

  const { data } = await pocSdk.host.hostControllerAddShippingAddress(input);

  console.log(data);
})();
```

## hostControllerUpdateShippingAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/host/{id}/shipping-address/{addressId}`

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

  const { data } = await pocSdk.host.hostControllerUpdateShippingAddress(input);

  console.log(data);
})();
```

## hostControllerRemoveDeleteAddress

- HTTP Method: `DELETE`
- Endpoint: `/v2/host/{id}/shipping-address/{addressId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostControllerRemoveDeleteAddress();

  console.log(data);
})();
```

## hostControllerDisable

- HTTP Method: `POST`
- Endpoint: `/v2/host/{id}/disable`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [DisableHostRequest](../models/DisableHostRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { DisableHostRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const disableHostRequest: DisableHostRequest = {
    disable: true,
  };

  const { data } = await pocSdk.host.hostControllerDisable(disableHostRequest);

  console.log(data);
})();
```

## hostControllerAddBeneficiary

- HTTP Method: `POST`
- Endpoint: `/v2/host/{id}/beneficiary`

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

  const { data } = await pocSdk.host.hostControllerAddBeneficiary(input);

  console.log(data);
})();
```

## hostControllerUpdateBeneficiary

- HTTP Method: `PUT`
- Endpoint: `/v2/host/{id}/beneficiary/{beneficiary_id}`

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

  const { data } = await pocSdk.host.hostControllerUpdateBeneficiary(input);

  console.log(data);
})();
```

## hostControllerDeleteBeneficiary

- HTTP Method: `DELETE`
- Endpoint: `/v2/host/{id}/beneficiary/{beneficiary_id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostControllerDeleteBeneficiary();

  console.log(data);
})();
```

## hostAppEventControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/event`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostAppEventControllerList();

  console.log(data);
})();
```

## hostAppEventControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/event/{id}`

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

  const { data } = await pocSdk.host.hostAppEventControllerGet('id');

  console.log(data);
})();
```

## hostAppEventControllerGetFeedback

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/event/{id}/feedback`

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

  const { data } = await pocSdk.host.hostAppEventControllerGetFeedback('id');

  console.log(data);
})();
```

## hostAppEventControllerCreateFeedback

- HTTP Method: `POST`
- Endpoint: `/v2/host-app/event/{id}/feedback`

**Parameters**

| Name | Type                                                                          | Required | Description       |
| :--- | :---------------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateEventHostFeedbackRequest](../models/CreateEventHostFeedbackRequest.md) | ✅       | The request body. |
| id   | string                                                                        | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { CreateEventHostFeedbackRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createEventHostFeedbackRequest: CreateEventHostFeedbackRequest = {
    participantCount: 1.44,
    kitsCreated: 10,
    pollsConducted: true,
    pollsConductedDescription: 'pollsConductedDescription',
    pollsDataFileUrl: 'pollsDataFileUrl',
    eventExperience: 'eventExperience',
    goodfies: ['goodfies'],
    goodfieCaptured: true,
    goodfieCaptureDescription: 'goodfieCaptureDescription',
    eventRecorded: true,
    eventRecordingFileUrl: 'eventRecordingFileUrl',
    eventRecordingDescription: 'eventRecordingDescription',
    eventRating: 7.94,
    eventContentRating: 6.74,
    isLinksWorking: true,
    isEventImagesUploaded: true,
    eventImagesUploadIssue: 'eventImagesUploadIssue',
    isPostEventShippingLabelPrinted: true,
    postEventShippingIssue: 'postEventShippingIssue',
  };

  const { data } = await pocSdk.host.hostAppEventControllerCreateFeedback('id', createEventHostFeedbackRequest);

  console.log(data);
})();
```

## hostAppFileControllerGetPresignedUploadUrl

- HTTP Method: `POST`
- Endpoint: `/v2/host-app/file/signed-url/upload`

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

  const { data } = await pocSdk.host.hostAppFileControllerGetPresignedUploadUrl(createPresignedUploadUrlRequest);

  console.log(data);
})();
```

## hostAppFileControllerGetPresignedDownloadUrl

- HTTP Method: `POST`
- Endpoint: `/v2/host-app/file/signed-url/download`

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

  const { data } = await pocSdk.host.hostAppFileControllerGetPresignedDownloadUrl(createPresignedDownloadUrlRequest);

  console.log(data);
})();
```

## hostAppFileControllerDelete

- HTTP Method: `DELETE`
- Endpoint: `/v2/host-app/file`

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

  const { data } = await pocSdk.host.hostAppFileControllerDelete(deleteFileRequest);

  console.log(data);
})();
```

## hostAppHostControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/host`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostAppHostControllerList();

  console.log(data);
})();
```

## hostAppHostControllerMe

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/host/me`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostAppHostControllerMe();

  console.log(data);
})();
```

## hostAppHostControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/host-app/host/{id}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostAppHostControllerGet();

  console.log(data);
})();
```

## hostAppHostControllerAddShippingAddress

- HTTP Method: `POST`
- Endpoint: `/v2/host-app/host/{id}/shipping-address`

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

  const { data } = await pocSdk.host.hostAppHostControllerAddShippingAddress(input);

  console.log(data);
})();
```

## hostAppHostControllerUpdateShippingAddress

- HTTP Method: `PUT`
- Endpoint: `/v2/host-app/host/{id}/shipping-address/{addressId}`

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

  const { data } = await pocSdk.host.hostAppHostControllerUpdateShippingAddress(input);

  console.log(data);
})();
```

## hostAppHostControllerRemoveDeleteAddress

- HTTP Method: `DELETE`
- Endpoint: `/v2/host-app/host/{id}/shipping-address/{addressId}`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostAppHostControllerRemoveDeleteAddress();

  console.log(data);
})();
```

## hostMobileAppEventControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/event`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.host.hostMobileAppEventControllerList();

  console.log(data);
})();
```

## hostMobileAppEventControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/host-mobile-api/event/{id}`

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

  const { data } = await pocSdk.host.hostMobileAppEventControllerGet('id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
