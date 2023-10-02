import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Widget extends BaseEndpoint {
  public async get(query: paths["/widgets"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET(`/widgets`, { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/widgets/{id}`, {
      params: { path: { id } }
    })
  }
}
