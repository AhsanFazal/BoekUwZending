import { BaseEndpoint } from "./Base";
export declare class User extends BaseEndpoint {
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
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
                "application/vnd.api+json": Record<string, never>;
                "text/html": Record<string, never>;
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
                };
            };
            400: {
                content: {};
            };
            404: {
                content: {};
            };
            422: {
                content: {};
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
                        relation?: {
                            id?: string | undefined;
                        } | undefined;
                        name?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        relation?: {
                            id?: string | undefined;
                        } | undefined;
                        name?: string | undefined;
                    };
                    "text/html": {
                        relation?: {
                            id?: string | undefined;
                        } | undefined;
                        name?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
