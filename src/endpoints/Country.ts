import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Country extends BaseEndpoint {
  public async get(
    query: operations["getCountryCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/countries", { params: { query } })
  }

  public async getById(id: string) {
    return this.httpClient.GET(`/countries/{id}`, {
      params: { path: { id } }
    })
  }
}
