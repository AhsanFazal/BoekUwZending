import createClient from "openapi-fetch"
import {
  MeEndpoint,
  ExternalOrderEndpoint,
  TransportEndpoint,
  UserEndpoint,
  AddressBookEndpoint,
  AdminUserEndpoint,
  BulkShipmentEndpoint,
  BuzzieEndpoint,
  ConversationEndpoint,
  CountryEndpoint,
  DistributorEndpoint,
  IntegrationEndpoint,
  LabelEndpoint,
  MatrixEndpoint,
  MessageEndpoint,
  PickupRequestEndpoint,
  RateRequestEndpoint
} from "./endpoints"
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
  public transport!: TransportEndpoint
  public user!: UserEndpoint
  public addressBook!: AddressBookEndpoint
  public adminUser!: AdminUserEndpoint
  public bulkShipment!: BulkShipmentEndpoint
  public buzzie!: BuzzieEndpoint
  public conversation!: ConversationEndpoint
  public country!: CountryEndpoint
  public distributor!: DistributorEndpoint
  public integration!: IntegrationEndpoint
  public label!: LabelEndpoint
  public matrix!: MatrixEndpoint
  public message!: MessageEndpoint
  public pickupRequest!: PickupRequestEndpoint
  public rateRequest!: RateRequestEndpoint

  constructor(config: ClientConfig) {
    this.baseURL = config.mode === "staging" ? URLs.staging : URLs.production
    this.baseClient = createClient<paths>()
  }

  private registerEndpoints(): void {
    this.me = new MeEndpoint(this.httpClient)
    this.externalOrders = new ExternalOrderEndpoint(this.httpClient)
    this.transport = new TransportEndpoint(this.httpClient)
    this.user = new UserEndpoint(this.httpClient)
    this.addressBook = new AddressBookEndpoint(this.httpClient)
    this.adminUser = new AdminUserEndpoint(this.httpClient)
    this.bulkShipment = new BulkShipmentEndpoint(this.httpClient)
    this.buzzie = new BuzzieEndpoint(this.httpClient)
    this.conversation = new ConversationEndpoint(this.httpClient)
    this.country = new CountryEndpoint(this.httpClient)
    this.distributor = new DistributorEndpoint(this.httpClient)
    this.integration = new IntegrationEndpoint(this.httpClient)
    this.label = new LabelEndpoint(this.httpClient)
    this.matrix = new MatrixEndpoint(this.httpClient)
    this.message = new MessageEndpoint(this.httpClient)
    this.pickupRequest = new PickupRequestEndpoint(this.httpClient)
    this.rateRequest = new RateRequestEndpoint(this.httpClient)
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
