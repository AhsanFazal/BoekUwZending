import { BaseEndpoint } from "./Base";
export declare class BulkShipment extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>[];
                    "application/vnd.api+json": Record<string, never>[];
                    "text/html": Record<string, never>[];
                };
            };
        };
    }>>;
    getById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
