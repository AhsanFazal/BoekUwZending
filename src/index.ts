import createClient from "openapi-fetch"
import { MeEndpoint, ExternalOrderEndpoint } from "./endpoints"
import { paths } from "./lib/api"

interface ClientConfig {
  clientId: string
  clientSecret: string
  mode?: "production" | "staging"
  authorizationScopes?: string[]
}

enum URLs {
  production = "https://api.boekuwzending.com",
  staging = "https://staging.api.boekuwzending.com"
}

export default class BoekUwZendingClient {
  // Private properties
  private baseClient: ReturnType<typeof createClient<paths>>
  private baseURL: string
  private accessToken?: string

  // Public Endpoint Handlers
  public me!: MeEndpoint
  public externalOrders!: ExternalOrderEndpoint

  constructor(config: ClientConfig) {
    this.baseURL = config.mode === "staging" ? URLs.staging : URLs.production
    this.baseClient = createClient<paths>()
  }

  public static async create(
    config: ClientConfig
  ): Promise<BoekUwZendingClient> {
    const client = new BoekUwZendingClient(config)
    await client.authorize(config)
    client.registerEndpoints()
    return client
  }

  public get httpClient() {
    return new Proxy(this.baseClient, {
      get: (_, key: keyof typeof this.baseClient) => {
        const newClient = createClient<paths>({
          headers: this.accessToken
            ? { Authorization: `Bearer ${this.accessToken}` }
            : {},
          baseUrl: this.baseURL
        })
        return newClient[key]
      }
    })
  }

  private registerEndpoints(): void {
    this.me = new MeEndpoint(this.httpClient)
    this.externalOrders = new ExternalOrderEndpoint(this.httpClient)
  }

  public async authorize(config: ClientConfig) {
    const method = "POST"
    const url = "/token"
    const data = {
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: "client_credentials",
      scopes: config.authorizationScopes?.join(" ") || ""
    }
    const headers = { "Content-Type": "application/x-www-form-urlencoded" }

    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method,
        headers,
        body: new URLSearchParams(data)
      })
      if (!response.ok) throw new Error("Authorization failed")
      const json = await response.json()
      if (!json.access_token || !json.expires_in)
        throw new Error("Authorization failed")
      this.accessToken = json.access_token
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
