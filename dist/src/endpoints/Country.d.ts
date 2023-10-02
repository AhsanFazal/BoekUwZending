import { BaseEndpoint } from "./Base";
export declare class Country extends BaseEndpoint {
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
                    "application/json": {
                        code?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        code?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        code?: string | undefined;
                        id?: string | undefined;
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
                        code?: string | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        code?: string | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        code?: string | undefined;
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
