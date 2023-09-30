import { components, operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class IntegrationEndpoint extends BaseEndpoint {
  public async get(
    query: operations["getIntegrationCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/integrations", { params: { query } })
  }

  public async createShopifyIntegration(
    body: components["schemas"]["ShopifyServiceIntegration-integration-item-write"]
  ) {
    return this.httpClient.POST("/integrations/shopify", { body })
  }

  public async getShopifyIntegrationById(id: string) {
    return this.httpClient.GET(`/integrations/shopify/{id}`, {
      params: { path: { id } }
    })
  }

  public async getIntegrationById(id: string) {
    return this.httpClient.GET(`/integrations/{id}`, {
      params: { path: { id } }
    })
  }
}
