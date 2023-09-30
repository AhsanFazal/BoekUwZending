# BoekUwZending TypeScript SDK

Unofficial TypeScript SDK for the [BoekUwZending API](https://api.boekuwzending.com/docs/).

## Installation


### npm

```bash
npm install boekuwzending
```

### yarn

```bash
yarn add boekuwzending
```

## Usage

#### Creating a client

```typescript
import { BoekUwZending } from 'boekuwzending-sdk'

const client = new ApiClient({
  clientId: 'yourClientId',
  clientSecret: 'yourClientSecret',
  mode: 'production' // or 'staging' (optional)
})
```

### Getting all orders

```typescript
import BoekUwZendingClient from "../src"

const client = await BoekUwZendingClient.create({
  clientId: "[CLIENT_ID]",
  clientSecret: "[CLIENT_SECRET]"
})

const { data, error } = await client.externalOrders.get({
  _items_per_page: 10,
  _page: 1
})
```


## API Implementation Status

### ✅ Implemented

#### Current User

| Endpoint | GET | POST | PUT | DELETE |
| -------- | --- | ---- | --- | ------ |
| **/me**  | ✅   | -    | -   | -      |

#### Orders

| Endpoint         | GET | POST | PUT | DELETE |
| ---------------- | --- | ---- | --- | ------ |
| **/orders**      | ✅   | ✅    | -   | -      |
| **/orders/{id}** | ✅   | -    | ✅   | ✅      |


### ❌ Not Implemented

#### Address Book

| Endpoint                     | GET | POST | PUT | DELETE |
| ---------------------------- | --- | ---- | --- | ------ |
| **/address_book_items**      | ❌   | -    | -   | -      |
| **/address_book_items/{id}** | ❌   | -    | -   | -      |


#### Users

| Endpoint        | GET | POST | PUT | DELETE |
| --------------- | --- | ---- | --- | ------ |
| **/users**      | ❌   | ❌    | -   | -      |
| **/users/{id}** | ❌   | -    | -   | -      |

#### Admin Users

| Endpoint              | GET | POST | PUT | DELETE |
| --------------------- | --- | ---- | --- | ------ |
| **/admin_users**      | ❌   | -    | -   | -      |
| **/admin_users/{id}** | ❌   | -    | -   | -      |

#### Bulk Shipments

| Endpoint                 | GET | POST | PUT | DELETE |
| ------------------------ | --- | ---- | --- | ------ |
| **/bulk_shipments**      | ❌   | -    | -   | -      |
| **/bulk_shipments/{id}** | ❌   | -    | -   | -      |



#### Buzzie

| Endpoint              | GET | POST | PUT | DELETE |
| --------------------- | --- | ---- | --- | ------ |
| **/buzzie/postcodes** | ❌   | -    | -   | -      |

#### Conversations

| Endpoint                         | GET | POST | PUT | DELETE |
| -------------------------------- | --- | ---- | --- | ------ |
| **/conversations**               | ❌   | ❌    | -   | -      |
| **/conversations/{id}**          | ❌   | -    | -   | -      |
| **/conversations/{id}/messages** | ❌   | -    | -   | -      |

#### Countries

| Endpoint            | GET | POST | PUT | DELETE |
| ------------------- | --- | ---- | --- | ------ |
| **/countries**      | ❌   | -    | -   | -      |
| **/countries/{id}** | ❌   | -    | -   | -      |
| **/distributors**   | ❌   | -    | -   | -      |

#### Distributors

| Endpoint               | GET | POST | PUT | DELETE |
| ---------------------- | --- | ---- | --- | ------ |
| **/distributors/{id}** | ❌   | -    | -   | -      |


#### Integrations

| Endpoint                       | GET | POST | PUT | DELETE |
| ------------------------------ | --- | ---- | --- | ------ |
| **/integrations**              | ❌   | -    | -   | -      |
| **/integrations/shopify**      | -   | ❌    | -   | -      |
| **/integrations/shopify/{id}** | ❌   | -    | -   | -      |
| **/integrations/{id}**         | ❌   | -    | -   | -      |

#### Labels

| Endpoint         | GET | POST | PUT | DELETE |
| ---------------- | --- | ---- | --- | ------ |
| **/labels/{id}** | ❌   | -    | -   | -      |

#### Matrix

| Endpoint                   | GET | POST | PUT | DELETE |
| -------------------------- | --- | ---- | --- | ------ |
| **/matrices**              | ❌   | -    | -   | -      |
| **/matrices/{id}**         | ❌   | -    | -   | -      |
| **/matrix_groups**         | ❌   | -    | -   | -      |
| **/matrix_groups/{id}**    | ❌   | -    | -   | -      |
| **/matrix_postcodes**      | ❌   | -    | -   | -      |
| **/matrix_postcodes/{id}** | ❌   | -    | -   | -      |
| **/matrix_rates**          | ❌   | -    | -   | -      |
| **/matrix_rates/{id}**     | ❌   | -    | -   | -      |

#### Messages

| Endpoint           | GET | POST | PUT | DELETE |
| ------------------ | --- | ---- | --- | ------ |
| **/messages**      | -   | ❌    | -   | -      |
| **/messages/{id}** | ❌   | -    | ❌   | -      |



#### Requests

- [ ] **/pickup_requests**
  - [ ] GET
  - [ ] POST

- [ ] **/pickup_requests/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/rate-request**
  - [ ] POST


#### Relations

- [ ] **/relations**
  - [ ] GET

- [ ] **/relations/{id}**
  - [ ] GET


#### Scan Inbounds

- [ ] **/scan_inbounds**
  - [ ] POST

- [ ] **/scan_inbounds/{uuid}**
  - [ ] GET


#### Services

- [ ] **/services**
  - [ ] POST

- [ ] **/services/{id}**
  - [ ] GET


#### Shipments

- [ ] **/shipment_quotations**
  - [ ] GET

- [ ] **/shipment_quotations/{id}**
  - [ ] GET

- [ ] **/shipments**
  - [ ] GET
  - [ ] POST

- [ ] **/shipments/items/{id}**
  - [ ] GET

- [ ] **/shipments/{id}**
  - [ ] GET

- [ ] **/shipments/{id}/labels**
  - [ ] GET


#### Surcharge Sets

- [ ] **/surcharge_sets/{id}**
  - [ ] GET


#### Tracking

- [ ] **/track-and-trace/{id}**
  - [ ] GET

- [ ] **/trackings**
  - [ ] GET

- [ ] **/trackings/{id}**
  - [ ] GET



#### `/transport`

- [ ] **/transport/depots**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/depots/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/drivers**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/drivers/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/transport/excluded_pickups**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/excluded_pickups/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/pickup_requests**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/pickup_requests/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/transport/pickup_schedules**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/pickup_schedules/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/pickups**
  - [ ] GET

- [ ] **/transport/pickups/{id}**
  - [ ] GET

- [ ] **/transport/positions**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/positions/{id}**
  - [ ] GET

- [ ] **/transport/postcodes**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/postcodes/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/transport/regions**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/regions/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/route_collection_bulks**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/route_collection_bulks/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/route_collection_vehicles**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/route_collection_vehicles/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/transport/route_collections**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/route_collections/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/route_collections/{id}/route_collection_bulks**
  - [ ] GET

- [ ] **/transport/route_collections/{id}/route_collection_vehicles**
  - [ ] GET

- [ ] **/transport/route_collections/{id}/routes**
  - [ ] GET

- [ ] **/transport/route_collections/{id}/routes/{routes}/steps**
  - [ ] GET

- [ ] **/transport/route_collections/{id}/unassigneds**
  - [ ] GET

- [ ] **/transport/routes**
  - [ ] GET

- [ ] **/transport/routes/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] PATCH

- [ ] **/transport/routes/{id}/steps**
  - [ ] GET

- [ ] **/transport/statuses**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/statuses/{id}**
  - [ ] GET

- [ ] **/transport/steps**
  - [ ] GET

- [ ] **/transport/steps/{id}**
  - [ ] GET
  - [ ] DELETE

- [ ] **/transport/task_activities**
  - [ ] GET

- [ ] **/transport/task_activities/{id}**
  - [ ] GET

- [ ] **/transport/task_labels**
  - [ ] GET

- [ ] **/transport/task_labels/{id}**
  - [ ] GET
  - [ ] PUT

- [ ] **/transport/task_pickups**
  - [ ] GET

- [ ] **/transport/task_pickups/{id}**
  - [ ] GET
  - [ ] PUT

- [ ] **/transport/tasks**
  - [ ] GET

- [ ] **/transport/tasks/{id}**
  - [ ] GET
  - [ ] PUT

- [ ] **/transport/unassigned_labels**
  - [ ] GET

- [ ] **/transport/unassigned_labels/{id}**
  - [ ] GET

- [ ] **/transport/unassigned_pickups**
  - [ ] GET

- [ ] **/transport/unassigned_pickups/{id}**
  - [ ] GET

- [ ] **/transport/unassigned_shipments**
  - [ ] GET

- [ ] **/transport/unassigned_shipments/{id}**
  - [ ] GET

- [ ] **/transport/unassigneds**
  - [ ] GET

- [ ] **/transport/unassigneds/{id}**
  - [ ] GET

- [ ] **/transport/vehicles**
  - [ ] GET
  - [ ] POST

- [ ] **/transport/vehicles/{id}**
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] PATCH

- [ ] **/transport/warehouse/{waybill}/info**
  - [ ] GET

- [ ] **/transport/warehouse_informations**
  - [ ] GET


#### Types

- [ ] **/types**
  - [ ] GET

- [ ] **/types/{id}**
  - [ ] GET
  


#### Webhooks

- [ ] **/webhooks**
  - [ ] GET
  - [ ] POST

- [ ] **/webhooks/{id}**
  - [ ] GET


#### Widgets

- [ ] **/widgets**
  - [ ] GET

- [ ] **/widgets/{id}**
  - [ ] GET


