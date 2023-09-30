import { MeEndpoint, ExternalOrderEndpoint, TransportEndpoint, UserEndpoint, AddressBookEndpoint, AdminUserEndpoint, BulkShipmentEndpoint, BuzzieEndpoint, ConversationEndpoint, CountryEndpoint } from "./endpoints";
import { paths } from "./lib/api";
interface ClientConfig {
    clientId: string;
    clientSecret: string;
    mode?: "production" | "staging";
    authorizationScopes?: string[];
}
export default class BoekUwZendingClient {
    private baseClient;
    private baseURL;
    private accessToken?;
    me: MeEndpoint;
    externalOrders: ExternalOrderEndpoint;
    transport: TransportEndpoint;
    user: UserEndpoint;
    addressBook: AddressBookEndpoint;
    adminUser: AdminUserEndpoint;
    bulkShipment: BulkShipmentEndpoint;
    buzzie: BuzzieEndpoint;
    conversation: ConversationEndpoint;
    country: CountryEndpoint;
    constructor(config: ClientConfig);
    private registerEndpoints;
    static create(config: ClientConfig): Promise<BoekUwZendingClient>;
    get httpClient(): {
        GET<P extends import("openapi-typescript-helpers").PathsWithMethod<paths, "get">>(url: P, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P], "get">>): Promise<import("openapi-fetch").FetchResponse<"get" extends keyof paths[P] ? paths[P][keyof paths[P] & "get"] : unknown>>;
        PUT<P_1 extends import("openapi-typescript-helpers").PathsWithMethod<paths, "put">>(url: P_1, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_1], "put">>): Promise<import("openapi-fetch").FetchResponse<"put" extends keyof paths[P_1] ? paths[P_1][keyof paths[P_1] & "put"] : unknown>>;
        POST<P_2 extends import("openapi-typescript-helpers").PathsWithMethod<paths, "post">>(url: P_2, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_2], "post">>): Promise<import("openapi-fetch").FetchResponse<"post" extends keyof paths[P_2] ? paths[P_2][keyof paths[P_2] & "post"] : unknown>>;
        DELETE<P_3 extends import("openapi-typescript-helpers").PathsWithMethod<paths, "delete">>(url: P_3, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_3], "delete">>): Promise<import("openapi-fetch").FetchResponse<"delete" extends keyof paths[P_3] ? paths[P_3][keyof paths[P_3] & "delete"] : unknown>>;
        OPTIONS<P_4 extends never>(url: P_4, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_4], "options">>): Promise<import("openapi-fetch").FetchResponse<"options" extends keyof paths[P_4] ? paths[P_4][keyof paths[P_4] & "options"] : unknown>>;
        HEAD<P_5 extends never>(url: P_5, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_5], "head">>): Promise<import("openapi-fetch").FetchResponse<"head" extends keyof paths[P_5] ? paths[P_5][keyof paths[P_5] & "head"] : unknown>>;
        PATCH<P_6 extends import("openapi-typescript-helpers").PathsWithMethod<paths, "patch">>(url: P_6, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_6], "patch">>): Promise<import("openapi-fetch").FetchResponse<"patch" extends keyof paths[P_6] ? paths[P_6][keyof paths[P_6] & "patch"] : unknown>>;
        TRACE<P_7 extends never>(url: P_7, init: import("openapi-fetch").FetchOptions<import("openapi-typescript-helpers").FilterKeys<paths[P_7], "trace">>): Promise<import("openapi-fetch").FetchResponse<"trace" extends keyof paths[P_7] ? paths[P_7][keyof paths[P_7] & "trace"] : unknown>>;
    };
    authorize(config: ClientConfig): Promise<void>;
}
export {};
