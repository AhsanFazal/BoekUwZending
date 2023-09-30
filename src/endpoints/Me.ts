import { BaseEndpoint } from "./Base"

export class MeEndpoint extends BaseEndpoint {
  public async get() {
    return this.httpClient.GET("/me", {})
  }
}
