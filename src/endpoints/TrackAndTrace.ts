import { BaseEndpoint } from "./Base"

export class TrackAndTrace extends BaseEndpoint {
  public async getById(id: any, query: any) {
    return this.httpClient.GET(`/track-and-trace/{id}`, {
      params: { path: { id }, query }
    })
  }
}
