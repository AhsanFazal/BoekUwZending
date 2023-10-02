import { BaseEndpoint } from "./Base"

export class Distributor extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/distributors", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/distributors/{id}`, {
      params: { path: { id } }
    })
  }
}
