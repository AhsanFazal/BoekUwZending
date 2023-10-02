import { BaseEndpoint } from "./Base"

export class Relation extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/relations", { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/relations/{id}`, {
      params: { path: { id } }
    })
  }
}
