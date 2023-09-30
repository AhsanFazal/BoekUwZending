import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class BuzzieEndpoint extends BaseEndpoint {
  public async get(
    query: operations["buzzie-postcodesPostcodeCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/buzzie/postcodes", { params: { query } })
  }
}
