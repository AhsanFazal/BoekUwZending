import { BaseEndpoint } from "./Base"

export class Country extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/countries", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/countries/{id}`, {
      params: { path: { id } }
    })
  }
}
