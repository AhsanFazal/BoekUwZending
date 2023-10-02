import { BaseEndpoint } from "./Base";
export declare class Webhook extends BaseEndpoint {
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
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
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
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    url?: string | undefined;
                    integration?: string | undefined;
                    event?: string | undefined;
                };
                "application/vnd.api+json": {
                    url?: string | undefined;
                    integration?: string | undefined;
                    event?: string | undefined;
                };
                "text/html": {
                    url?: string | undefined;
                    integration?: string | undefined;
                    event?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        url?: string | undefined;
                        integration?: string | undefined;
                        event?: string | undefined;
                        id?: string | undefined;
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
}
