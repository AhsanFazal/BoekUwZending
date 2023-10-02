import { BaseEndpoint } from "./Base";
export declare class SurchargeSet extends BaseEndpoint {
    getById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        id?: string | undefined;
                    };
                    "text/html": {
                        id?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
