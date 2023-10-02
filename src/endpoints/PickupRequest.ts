import { components, operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class PickupRequest extends BaseEndpoint {
  public async get(
    query: operations["getPickupRequestCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/pickup_requests", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/pickup_requests/{id}`, {
      params: { path: { id } }
    })
  }

  public async create(
    body: components["schemas"]["PickupRequest-pickup_request-collection-write"]
  ) {
    return this.httpClient.POST("/pickup_requests", { body })
  }

  public async updateById(
    id: string,
    body: components["schemas"]["PickupRequest-pickup_request-collection-write"]
  ) {
    return this.httpClient.PATCH(`/pickup_requests/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: string) {
    return this.httpClient.DELETE(`/pickup_requests/{id}`, {
      params: { path: { id } }
    })
  }

  public async replaceById(
    id: string,
    body: components["schemas"]["PickupRequest-pickup_request-collection-write"]
  ) {
    return this.httpClient.PUT(`/pickup_requests/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
