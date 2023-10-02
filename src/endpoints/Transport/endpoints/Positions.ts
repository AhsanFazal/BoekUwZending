import { BaseEndpoint } from "../../Base"

export class Positions extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/transport/positions", { params: { query } })
  }

  public async create(body: any) {
    return this.httpClient.POST("/transport/positions", { body })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/transport/positions/{id}`, {
      params: { path: { id } }
    })
  }
}
