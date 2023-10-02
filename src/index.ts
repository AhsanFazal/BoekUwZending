import createClient from "openapi-fetch"
import * as endpoints from "./endpoints"
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

interface OAuthResponse {
  access_token?: string
  token_type?: string
  expires_in?: number
  error?: string
  error_description?: string
}

export default class BoekUwZendingClient {
  // Private properties
  private baseClient = createClient<paths>()
  private baseURL: string
  private accessToken?: string

  // Public Endpoint Handlers
  public me!: endpoints.Me
  public externalOrders!: endpoints.ExternalOrder
  public transport!: endpoints.Transport
  public user!: endpoints.User
  public addressBook!: endpoints.AddressBook
  public adminUser!: endpoints.AdminUser
  public bulkShipment!: endpoints.BulkShipment
  public buzzie!: endpoints.Buzzie
  public conversation!: endpoints.Conversation
  public country!: endpoints.Country
  public distributor!: endpoints.Distributor
  public integration!: endpoints.Integration
  public label!: endpoints.Label
  public matrix!: endpoints.Matrix
  public message!: endpoints.Message
  public pickupRequest!: endpoints.PickupRequest
  public rateRequest!: endpoints.RateRequest

  constructor(config: ClientConfig) {
    this.baseURL = config.mode === "staging" ? URLs.staging : URLs.production
    this.initializeEndpoints()
  }

  private initializeEndpoints(): void {
    this.me = new endpoints.Me(this.httpClient)
    this.externalOrders = new endpoints.ExternalOrder(this.httpClient)
    this.transport = new endpoints.Transport(this.httpClient)
    this.user = new endpoints.User(this.httpClient)
    this.addressBook = new endpoints.AddressBook(this.httpClient)
    this.adminUser = new endpoints.AdminUser(this.httpClient)
    this.bulkShipment = new endpoints.BulkShipment(this.httpClient)
    this.buzzie = new endpoints.Buzzie(this.httpClient)
    this.conversation = new endpoints.Conversation(this.httpClient)
    this.country = new endpoints.Country(this.httpClient)
    this.distributor = new endpoints.Distributor(this.httpClient)
    this.integration = new endpoints.Integration(this.httpClient)
    this.label = new endpoints.Label(this.httpClient)
    this.matrix = new endpoints.Matrix(this.httpClient)
    this.message = new endpoints.Message(this.httpClient)
    this.pickupRequest = new endpoints.PickupRequest(this.httpClient)
    this.rateRequest = new endpoints.RateRequest(this.httpClient)
  }

  public static async create(
    config: ClientConfig
  ): Promise<BoekUwZendingClient> {
    const client = new BoekUwZendingClient(config)
    await client.authorize(config)
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

  public async authorize(config: ClientConfig): Promise<void> {
    const data = {
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: "client_credentials",
      scopes: config.authorizationScopes?.join(" ") || ""
    }

    try {
      const response = await fetch(`${this.baseURL}/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data)
      })

      const json: OAuthResponse = await response.json()

      if (!response.ok) {
        if (json.error)
          throw new Error(
            `OAuth Error: ${json.error}, ${json.error_description}`
          )
        throw new Error(
          `OAuth Error: ${response.status}, ${response.statusText}`
        )
      }

      if (
        !json.access_token ||
        !json.expires_in ||
        json.token_type !== "Bearer"
      ) {
        throw new Error(`Invalid response: ${JSON.stringify(json)}`)
      }

      this.accessToken = json.access_token
    } catch (error: any) {
      console.error("Authorization failed:", error.message)
      throw new Error(error) // Propagate error up the stack
    }
  }
}
