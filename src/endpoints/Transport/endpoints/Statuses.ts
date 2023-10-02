import { BaseEndpoint } from "../../Base"

export class Statuses extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/statuses", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/statuses", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/statuses/{id}`, {
      params: { path: { id } }
    })
  }
}
