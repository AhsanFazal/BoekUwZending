import { BaseEndpoint } from "./Base"

export class Buzzie extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/buzzie/postcodes", { params: { query } })
  }
}
