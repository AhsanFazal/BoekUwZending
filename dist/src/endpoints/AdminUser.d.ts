import { BaseEndpoint } from "./Base";
export declare class AdminUser extends BaseEndpoint {
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
                        id?: string | undefined;
                        username?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    }[];
                    "text/html": {
                        id?: string | undefined;
                        username?: string | undefined;
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
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                    "text/html": {
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
