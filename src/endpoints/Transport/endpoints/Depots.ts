import { BaseEndpoint } from "../../Base"
import { components, operations } from "../../../lib/api"

export class Depots extends BaseEndpoint {
  // /transport/depots

  public async get(
    query: operations["getDepotCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/transport/depots", { params: { query } })
  }

  public async create(
    body: components["schemas"]["Depot-transport-depot-collection-write"]
  ) {
    return this.httpClient.POST("/transport/depots", { body })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/transport/depots/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(
    id: string,
    body: components["schemas"]["Depot-transport-depot-item-write"]
  ) {
    return this.httpClient.PATCH(`/transport/depots/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async replaceById(
    id: string,
    body: components["schemas"]["Depot-transport-depot-item-write"]
  ) {
    return this.httpClient.PUT(`/transport/depots/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
