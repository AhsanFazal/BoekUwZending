# Unofficial BoekUwZending TypeScript SDK for the BoekUwZending API (https://www.boekuwzending.com/)

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


# API Implementation Status

- [x] **/me**
  - [x] GET

- [x] **/orders**
  - [x] GET
  - [x] POST

- [x] **/orders/{id}**
  - [x] GET
  - [x] PUT
  - [x] DELETE


- [ ] **/address_book_items**
  - [ ] GET

- [ ] **/address_book_items/{id}**
  - [ ] GET

- [ ] **/admin_users**
  - [ ] GET

- [ ] **/admin_users/{id}**
  - [ ] GET

- [ ] **/bulk_shipments**
  - [ ] GET

- [ ] **/bulk_shipments/{id}**
  - [ ] GET

- [ ] **/buzzie/postcodes**
  - [ ] GET

- [ ] **/conversations**
  - [ ] GET
  - [ ] POST

- [ ] **/conversations/{id}**
  - [ ] GET

- [ ] **/conversations/{id}/messages**
  - [ ] GET

- [ ] **/countries**
  - [ ] GET

- [ ] **/countries/{id}**
  - [ ] GET

- [ ] **/distributors**
  - [ ] GET

- [ ] **/distributors/{id}**
  - [ ] GET

- [ ] **/integrations**
  - [ ] GET

- [ ] **/integrations/shopify**
  - [ ] POST

- [ ] **/integrations/shopify/{id}**
  - [ ] GET

- [ ] **/integrations/{id}**
  - [ ] GET

- [ ] **/labels/{id}**
  - [ ] GET

- [ ] **/matrices**
  - [ ] GET

- [ ] **/matrices/{id}**
  - [ ] GET

- [ ] **/matrix_groups**
  - [ ] GET

- [ ] **/matrix_groups/{id}**
  - [ ] GET

- [ ] **/matrix_postcodes**
  - [ ] GET

- [ ] **/matrix_postcodes/{id}**
  - [ ] GET

- [ ] **/matrix_rates**
  - [ ] GET

- [ ] **/matrix_rates/{id}**
  - [ ] GET

- [ ] **/messages**
  - [ ] POST

- [ ] **/messages/{id}**
  - [ ] GET
  - [ ] PATCH

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

- [ ] **/relations**
  - [ ] GET

- [ ] **/relations/{id}**
  - [ ] GET

- [ ] **/scan_inbounds**
  - [ ] POST

- [ ] **/scan_inbounds/{uuid}**
  - [ ] GET

- [ ] **/services**
  - [ ] POST

- [ ] **/services/{id}**
  - [ ] GET

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

- [ ] **/surcharge_sets/{id}**
  - [ ] GET

- [ ] **/track-and-trace/{id}**
  - [ ] GET

- [ ] **/trackings**
  - [ ] GET

- [ ] **/trackings/{id}**
  - [ ] GET

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

- [ ] **/types**
  - [ ] GET

- [ ] **/types/{id}**
  - [ ] GET

- [ ] **/users**
  - [ ] GET
  - [ ] POST

- [ ] **/users/{id}**
  - [ ] GET

- [ ] **/webhooks**
  - [ ] GET
  - [ ] POST

- [ ] **/webhooks/{id}**
  - [ ] GET

- [ ] **/widgets**
  - [ ] GET

- [ ] **/widgets/{id}**
  - [ ] GET


