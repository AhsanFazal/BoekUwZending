import { BaseEndpoint } from "./Base";
export declare class Me extends BaseEndpoint {
    get(): Promise<import("openapi-fetch").FetchResponse<{
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        number?: string | undefined;
                        id?: string | undefined;
                        conversation?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        number?: string | undefined;
                        id?: string | undefined;
                        conversation?: string | undefined;
                    };
                    "text/html": {
                        name?: string | undefined;
                        number?: string | undefined;
                        id?: string | undefined;
                        conversation?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
