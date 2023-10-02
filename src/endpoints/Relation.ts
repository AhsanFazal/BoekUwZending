import { paths } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Relation extends BaseEndpoint {
  public async get(query: paths["/relations"]["get"]["parameters"]["query"]) {
    return this.httpClient.GET("/relations", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/relations/{id}`, {
      params: { path: { id } }
    })
  }
}
