import { BaseEndpoint } from "./Base";
export declare class MeEndpoint extends BaseEndpoint {
    get(): Promise<import("openapi-fetch").FetchResponse<{
        responses: {
            200: {
                content: {};
            };
            404: {
                content: {};
            };
        };
    }>>;
}
