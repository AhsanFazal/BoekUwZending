import { BaseEndpoint } from "./Base"

export class Widget extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET(`/widgets`, { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/widgets/{id}`, {
      params: { path: { id } }
    })
  }
}
