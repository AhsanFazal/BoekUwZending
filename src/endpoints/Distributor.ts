import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Distributor extends BaseEndpoint {
  public async get(
    query: operations["getDistributorCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/distributors", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/distributors/{id}`, {
      params: { path: { id } }
    })
  }
}
