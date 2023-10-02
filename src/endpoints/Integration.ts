import { BaseEndpoint } from "./Base"

export class Integration extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/integrations", { params: { query } })
  }

  public async createShopifyIntegration(body: any) {
    return this.httpClient.POST("/integrations/shopify", { body })
  }

  public async getShopifyIntegrationById(id: any) {
    return this.httpClient.GET(`/integrations/shopify/{id}`, {
      params: { path: { id } }
    })
  }

  public async getIntegrationById(id: any) {
    return this.httpClient.GET(`/integrations/{id}`, {
      params: { path: { id } }
    })
  }
}
