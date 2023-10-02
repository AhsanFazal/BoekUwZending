import { BaseEndpoint } from "../../Base"
import { components, operations } from "../../../lib/api"

export class Drivers extends BaseEndpoint {
  public async get(
    query: operations["getDriverCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/transport/drivers", { params: { query } })
  }

  public async create(
    body: components["schemas"]["Driver-transport-driver-collection-write"]
  ) {
    return this.httpClient.POST("/transport/drivers", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/transport/drivers/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(
    id: string,
    body: components["schemas"]["Driver-transport-driver-item-write"]
  ) {
    return this.httpClient.PATCH(`/transport/drivers/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async replaceById(
    id: string,
    body: components["schemas"]["Driver-transport-driver-item-write"]
  ) {
    return this.httpClient.PUT(`/transport/drivers/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async deleteById(id: string) {
    return this.httpClient.DELETE(`/transport/drivers/{id}`, {
      params: { path: { id } }
    })
  }
}
