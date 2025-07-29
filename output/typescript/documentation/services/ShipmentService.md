# ShipmentService

A list of all methods in the `ShipmentService` service. Click on the method name to view detailed information about that method.

| Methods                                                                             | Description |
| :---------------------------------------------------------------------------------- | :---------- |
| [shipmentControllerList](#shipmentcontrollerlist)                                   |             |
| [shipmentControllerCreate](#shipmentcontrollercreate)                               |             |
| [shipmentControllerUpdateTracking](#shipmentcontrollerupdatetracking)               |             |
| [shipmentControllerUpdateAcknowledgement](#shipmentcontrollerupdateacknowledgement) |             |
| [shipmentControllerGet](#shipmentcontrollerget)                                     |             |
| [shipmentControllerUpdate](#shipmentcontrollerupdate)                               |             |
| [shipmentControllerUpdateStatus](#shipmentcontrollerupdatestatus)                   |             |
| [shipmentControllerCreateTracking](#shipmentcontrollercreatetracking)               |             |
| [shipmentControllerDisable](#shipmentcontrollerdisable)                             |             |
| [shipmentControllerEnable](#shipmentcontrollerenable)                               |             |

## shipmentControllerList

- HTTP Method: `GET`
- Endpoint: `/v2/shipment`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.shipment.shipmentControllerList();

  console.log(data);
})();
```

## shipmentControllerCreate

- HTTP Method: `POST`
- Endpoint: `/v2/shipment`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreateShipmentRequest](../models/CreateShipmentRequest.md) | ✅       | The request body. |

**Example Usage Code Snippet**

```typescript
import { CreateShipmentAddress, CreateShipmentRequest, PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const createShipmentAddress: CreateShipmentAddress = {
    line1: '123 Main St',
    line2: 'Suite 4B',
    latitude: '40.7128',
    longitude: '-74.0060',
    city: 'New York',
    province: 'NY',
    postalCode: '10001',
    country: 'USA',
    url: 'https://example.com',
    metadata: {},
    email: 'user@example.com',
    isdCode: '+1',
    phoneNumber: '123-456-7890',
    recipientName: 'John Doe',
  };

  const createShipmentRequestRecipientType = 'event_venue';

  const createShipmentRequestSenderType = 'client';

  const type_ = 'pre_event';

  const createShipmentRequestCarrier = 'fedex';

  const createShipmentRequestDispatchType = 'pickup';

  const createShipmentRequest: CreateShipmentRequest = {
    recipientAddress: createShipmentAddress,
    recipientAddressId: 'recipientAddressId',
    recipientType: createShipmentRequestRecipientType,
    senderAddress: createShipmentAddress,
    senderAddressId: 'senderAddressId',
    senderType: createShipmentRequestSenderType,
    eventId: 'event123',
    type: type_,
    title: 'Shipment Title',
    carrier: createShipmentRequestCarrier,
    dispatchType: createShipmentRequestDispatchType,
    dispatchDate: '2025-07-28T09:14:59.852Z',
    trackingId: 'tracking123',
    trackingLink: 'https://tracking.example.com',
    note: 'Handle with care',
    expectedDeliveryDate: '2023-07-05T10:00:00.000Z',
    deliveryChallanUrl: 'deliveryChallanUrl',
    sezFormsUrl: 'sezFormsUrl',
    materialListUrl: 'materialListUrl',
  };

  const { data } = await pocSdk.shipment.shipmentControllerCreate(createShipmentRequest);

  console.log(data);
})();
```

## shipmentControllerUpdateTracking

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/tracking`

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

  const { data } = await pocSdk.shipment.shipmentControllerUpdateTracking(input);

  console.log(data);
})();
```

## shipmentControllerUpdateAcknowledgement

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/{id}/acknowledgement`

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

  const { data } = await pocSdk.shipment.shipmentControllerUpdateAcknowledgement('id', input);

  console.log(data);
})();
```

## shipmentControllerGet

- HTTP Method: `GET`
- Endpoint: `/v2/shipment/{id}`

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

  const { data } = await pocSdk.shipment.shipmentControllerGet('id');

  console.log(data);
})();
```

## shipmentControllerUpdate

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/{id}`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [UpdateShipmentRequest](../models/UpdateShipmentRequest.md) | ✅       | The request body. |
| id   | string                                                      | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateShipmentAddress, UpdateShipmentRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const updateShipmentAddress: UpdateShipmentAddress = {
    line1: 'line1',
    line2: 'line2',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    country: 'country',
    url: 'url',
    metadata: {},
    email: 'email',
    isdCode: 'isdCode',
    phoneNumber: 'phoneNumber',
    recipientName: 'recipientName',
  };

  const updateShipmentRequestRecipientType = 'event_venue';

  const updateShipmentRequestSenderType = 'client';

  const updateShipmentRequestCarrier = 'fedex';

  const updateShipmentRequestDispatchType = 'pickup';

  const updateShipmentRequest: UpdateShipmentRequest = {
    recipientAddress: updateShipmentAddress,
    recipientType: updateShipmentRequestRecipientType,
    senderAddress: updateShipmentAddress,
    senderType: updateShipmentRequestSenderType,
    title: 'title',
    carrier: updateShipmentRequestCarrier,
    dispatchType: updateShipmentRequestDispatchType,
    dispatchDate: '2025-07-28T09:14:59.853Z',
    trackingId: 'trackingId',
    trackingLink: 'trackingLink',
    note: 'note',
    expectedDeliveryDate: '2025-07-28T09:14:59.853Z',
    thirdPartyTrackingId: 'thirdPartyTrackingId',
    deliveryChallanUrl: 'deliveryChallanUrl',
    sezFormsUrl: 'sezFormsUrl',
    deliveryProofUrl: 'https://example.com/delivery-proof.pdf',
    materialListUrl: 'materialListUrl',
    shipmentLabelUrl: 'shipmentLabelUrl',
  };

  const { data } = await pocSdk.shipment.shipmentControllerUpdate('id', updateShipmentRequest);

  console.log(data);
})();
```

## shipmentControllerUpdateStatus

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/{id}/status`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [UpdateShipmentStateRequest](../models/UpdateShipmentStateRequest.md) | ✅       | The request body. |
| id   | string                                                                | ✅       |                   |

**Example Usage Code Snippet**

```typescript
import { PocSdk, UpdateShipmentStateRequest } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const status = 'not_fulfilled';

  const updateShipmentStateRequestCarrier = 'fedex';

  const updateShipmentStateRequest: UpdateShipmentStateRequest = {
    status: status,
    deliveryAcknowledgement: 'Received by John Doe',
    deliveryProofUrl: 'https://example.com/delivery-proof.pdf',
    expectedDeliveryDate: '2025-07-28T09:14:59.854Z',
    deliveryDate: '2025-07-28T09:14:59.854Z',
    trackingId: 'trackingId',
    trackingLink: 'trackingLink',
    carrier: updateShipmentStateRequestCarrier,
    isQrCodeStuck: true,
  };

  const { data } = await pocSdk.shipment.shipmentControllerUpdateStatus('id', updateShipmentStateRequest);

  console.log(data);
})();
```

## shipmentControllerCreateTracking

- HTTP Method: `POST`
- Endpoint: `/v2/shipment/{id}/tracking`

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

  const { data } = await pocSdk.shipment.shipmentControllerCreateTracking('id');

  console.log(data);
})();
```

## shipmentControllerDisable

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/{id}/disable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.shipment.shipmentControllerDisable();

  console.log(data);
})();
```

## shipmentControllerEnable

- HTTP Method: `PUT`
- Endpoint: `/v2/shipment/{id}/enable`

**Example Usage Code Snippet**

```typescript
import { PocSdk } from 'poc-sdk';

(async () => {
  const pocSdk = new PocSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pocSdk.shipment.shipmentControllerEnable();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
