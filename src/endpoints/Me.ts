import { BaseEndpoint } from "./Base"

export class Me extends BaseEndpoint {
  public async get() {
    return this.httpClient.GET("/me", {})
  }
}
