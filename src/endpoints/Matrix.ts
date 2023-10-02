import { BaseEndpoint } from "./Base"

export class Matrix extends BaseEndpoint {
  public async getMatrices(query: any) {
    return this.httpClient.GET("/matrices", { params: { query } })
  }

  public async getMatricesById(id: any) {
    return this.httpClient.GET(`/matrices/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixGroups(query: any) {
    return this.httpClient.GET("/matrix_groups", { params: { query } })
  }

  public async getMatrixGroupsById(id: any) {
    return this.httpClient.GET(`/matrix_groups/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixPostcodes(query: any) {
    return this.httpClient.GET("/matrix_postcodes", { params: { query } })
  }

  public async getMatrixPostcodesById(id: any) {
    return this.httpClient.GET(`/matrix_postcodes/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixRates(query: any) {
    return this.httpClient.GET("/matrix_rates", { params: { query } })
  }

  public async getMatrixRatesById(id: any) {
    return this.httpClient.GET(`/matrix_rates/{id}`, {
      params: { path: { id } }
    })
  }
}
