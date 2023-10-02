import { BaseEndpoint } from "../../Base"

export class Regions extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/regions", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/regions", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/regions/{id}`, {
      params: { path: { id } }
    })
  }

  public async updateById(id: any, body: any) {
    return this.httpClient.PUT(`/transport/regions/{id}`, {
      params: { path: { id } },
      body
    })
  }
}
