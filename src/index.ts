import createClient from "openapi-fetch"
import * as endpoints from "./endpoints"
import { paths } from "./lib/api"

export interface ClientConfig {
  clientId: string
  clientSecret: string
  mode?: "production" | "staging"
  authorizationScopes?: string[]
}

export enum URLs {
  production = "https://api.boekuwzending.com",
  staging = "https://staging.api.boekuwzending.com"
}

type EndpointTypes = typeof endpoints

type EndpointClassInstances = {
  [K in keyof EndpointTypes]: InstanceType<EndpointTypes[K]>
}

type EndpointInstances = {
  [K in Extract<
    keyof EndpointClassInstances,
    string
  > as `${K extends `${infer First}${infer Rest}`
    ? Lowercase<First>
    : ""}${K extends `${infer First}${infer Rest}`
    ? Rest
    : ""}`]: EndpointClassInstances[K]
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
  private accessToken?: string

  // Public properties
  public baseURL: string
  public endpoints: EndpointInstances

  constructor(config: ClientConfig) {
    console.log(config)
    this.baseURL = config.mode === "production" ? productionURL : stagingURL
    this.endpoints = {} as any
    this.initializeEndpoints()
  }

  private initializeEndpoints(): void {
    for (const key in endpoints) {
      if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
        const endpointKey = key as keyof EndpointClassInstances
        const lowerCaseKey = (endpointKey.charAt(0).toLowerCase() +
          endpointKey.slice(1)) as keyof EndpointInstances
        // Bypass TypeScript type checking by asserting as 'any'
        ;(this.endpoints as any)[lowerCaseKey] = new endpoints[endpointKey](
          this.httpClient
        )
      }
    }
    // Restore type safety by asserting back to EndpointInstances
    this.endpoints = this.endpoints as EndpointInstances
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
