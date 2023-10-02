import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Tracking extends BaseEndpoint {
  public async get(
    query: paths["/track-and-trace/{id}"]["get"]["parameters"]["query"]
  ) {
    return this.httpClient.GET(`/trackings`, { params: { query } })
  }

  public async getById(
    id: string,
    query: paths["/track-and-trace/{id}"]["get"]["parameters"]["query"]
  ) {
    return this.httpClient.GET(`/track-and-trace/{id}`, {
      params: { path: { id }, query }
    })
  }
}
