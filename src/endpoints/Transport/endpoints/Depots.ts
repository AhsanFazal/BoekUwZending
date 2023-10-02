import { BaseEndpoint } from "../../Base"

export class Depots extends BaseEndpoint {
  // /transport/depots

  public async get(query: any) {
    return this.httpClient.GET("/transport/depots", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/depots", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/depots/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PATCH(`/transport/depots/{id}`, {
      params: { path: { id } },
      body
    })
  }

  public async replaceById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/depots/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
