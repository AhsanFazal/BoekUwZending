import { BaseEndpoint } from "./Base"

export class Type extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET(`/trackings`, { params: { query } })
  }

  public async getById(id: any) {
    return this.httpClient.GET(`/types/{id}`, {
      params: { path: { id } }
    })
  }
}
