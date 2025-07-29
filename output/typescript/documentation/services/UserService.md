# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                   | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| [userControllerMe](#usercontrollerme)                                                     |             |
| [userControllerList](#usercontrollerlist)                                                 |             |
| [userControllerCreate](#usercontrollercreate)                                             |             |
| [userControllerGet](#usercontrollerget)                                                   |             |
| [userControllerUpdate](#usercontrollerupdate)                                             |             |
| [userControllerGetImplicitPermissionForUser](#usercontrollergetimplicitpermissionforuser) |             |
| [userControllerGetRolesForUser](#usercontrollergetrolesforuser)                           |             |
| [userControllerGetPermissionsForUser](#usercontrollergetpermissionsforuser)               |             |
| [userControllerAddUserToRole](#usercontrolleraddusertorole)                               |             |

## userControllerMe

- HTTP Method: `GET`
- Endpoint: `/v2/user/me`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.user.userControllerMe();

  console.log(data);
})();
```

## userControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/user`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.user.userControllerList();

  console.log(data);
})();
```

## userControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/user`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [CreateUserRequest](../models/CreateUserRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateUserRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createUserRequest: CreateUserRequest = {
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImageUrl: 'profileImageUrl',
    team: 'team',
    meetingUrl: 'meetingUrl',
  };

  const { data } = await pocSdk.user.userControllerCreate(createUserRequest);

  console.log(data);
})();
```

## userControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/user/{id}`

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

  const { data } = await pocSdk.user.userControllerGet('id');

  console.log(data);
})();
```

## userControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/user/{id}`

**Parameters**

| Name | Type                                                | Required | Description       |
| :--- | :-------------------------------------------------- | :------- | :---------------- |
| body | [UpdateUserRequest](../models/UpdateUserRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateUserRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateUserRequest: UpdateUserRequest = {
    firstName: 'firstName',
    lastName: 'lastName',
    team: 'team',
    profileImageUrl: 'profileImageUrl',
    meetingUrl: 'meetingUrl',
  };

  const { data } = await pocSdk.user.userControllerUpdate(updateUserRequest);

  console.log(data);
})();
```

## userControllerGetImplicitPermissionForUser

- HTTP Method: `GET`
- Endpoint: `/v2/user/{id}/implicit_permissions`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.user.userControllerGetImplicitPermissionForUser();

  console.log(data);
})();
```

## userControllerGetRolesForUser

- HTTP Method: `GET`
- Endpoint: `/v2/user/{id}/roles`

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

  const { data } = await pocSdk.user.userControllerGetRolesForUser('id');

  console.log(data);
})();
```

## userControllerGetPermissionsForUser

- HTTP Method: `GET`
- Endpoint: `/v2/user/{id}/permissions`

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

  const { data } = await pocSdk.user.userControllerGetPermissionsForUser('id');

  console.log(data);
})();
```

## userControllerAddUserToRole

- HTTP Method: `POST`
- Endpoint: `/v2/user/{id}/role/{role_id}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| id     | string | ✅       |             |
| roleId | string | ✅       |             |

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.user.userControllerAddUserToRole('id', 'role_id');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
