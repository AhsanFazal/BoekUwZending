import BoekUwZendingClient from ".."

export class BaseEndpoint {
  protected httpClient: BoekUwZendingClient["httpClient"]

  constructor(httpClient: BoekUwZendingClient["httpClient"]) {
    this.httpClient = httpClient
  }
}
