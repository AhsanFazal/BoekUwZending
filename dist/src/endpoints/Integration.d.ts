import { BaseEndpoint } from "./Base";
export declare class Integration extends BaseEndpoint {
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
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    }[];
                    "text/html": {
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    createShopifyIntegration(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    relation?: string | undefined;
                    shopUrl?: string | undefined;
                    externalAccountId?: string | undefined;
                };
                "application/vnd.api+json": {
                    relation?: string | undefined;
                    shopUrl?: string | undefined;
                    externalAccountId?: string | undefined;
                };
                "text/html": {
                    relation?: string | undefined;
                    shopUrl?: string | undefined;
                    externalAccountId?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        client?: Record<string, never> | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        client?: Record<string, never> | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
                    "text/html": {
                        client?: Record<string, never> | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
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
    getShopifyIntegrationById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
                    "text/html": {
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                        externalAccountId?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    getIntegrationById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    };
                    "text/html": {
                        externalAccountId?: string | undefined;
                        shopUrl?: string | undefined;
                        id?: string | undefined;
                        type?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
