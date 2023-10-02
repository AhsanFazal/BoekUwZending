import { BaseEndpoint } from "./Base";
export declare class Distributor extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                name?: string | undefined;
                code?: string | undefined;
                "code[]"?: string[] | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        name: string;
                    }[];
                    "application/vnd.api+json": {
                        name: string;
                    }[];
                    "text/html": {
                        name: string;
                    }[];
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
                    "application/json": {
                        name: string;
                    };
                    "application/vnd.api+json": {
                        name: string;
                    };
                    "text/html": {
                        name: string;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
