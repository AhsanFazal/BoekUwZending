import { operations } from "../lib/api"
import { BaseEndpoint } from "./Base"

export class Matrix extends BaseEndpoint {
  public async getMatrices(
    query: operations["getMatrixCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/matrices", { params: { query } })
  }

  public async getMatricesById(id: string) {
    return this.httpClient.GET(`/matrices/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixGroups(
    query: operations["getMatrixGroupCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/matrix_groups", { params: { query } })
  }

  public async getMatrixGroupsById(id: string) {
    return this.httpClient.GET(`/matrix_groups/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixPostcodes(
    query: operations["getMatrixPostcodeCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/matrix_postcodes", { params: { query } })
  }

  public async getMatrixPostcodesById(id: string) {
    return this.httpClient.GET(`/matrix_postcodes/{id}`, {
      params: { path: { id } }
    })
  }

  public async getMatrixRates(
    query: operations["getMatrixRateCollection"]["parameters"]["query"]
  ) {
    return this.httpClient.GET("/matrix_rates", { params: { query } })
  }

  public async getMatrixRatesById(id: string) {
    return this.httpClient.GET(`/matrix_rates/{id}`, {
      params: { path: { id } }
    })
  }
}
