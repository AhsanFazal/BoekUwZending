import { BaseEndpoint } from "./Base"

export class Tracking extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET(`/trackings`, { params: { query } })
  }

  public async getById(id: any, query: any) {
    return this.httpClient.GET(`/track-and-trace/{id}`, {
      params: { path: { id }, query }
    })
  }
}
