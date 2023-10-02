import { components, paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Type extends BaseEndpoint {
  public async get(query: paths["/types"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET(`/trackings`, { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/types/{id}`, {
      params: { path: { id } }
    })
  }
}
