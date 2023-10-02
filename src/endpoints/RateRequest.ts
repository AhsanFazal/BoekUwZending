import { BaseEndpoint } from "./Base"

export class RateRequest extends BaseEndpoint {
  public async create(body: any) {
    return this.httpClient.POST("/rate-request", { body })
  }
}
