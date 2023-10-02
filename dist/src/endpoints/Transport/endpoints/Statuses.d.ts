import { BaseEndpoint } from "../../Base";
export declare class Statuses extends BaseEndpoint {
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
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    step?: string | undefined;
                    data?: {
                        [key: string]: string;
                    } | undefined;
                };
                "application/vnd.api+json": {
                    step?: string | undefined;
                    data?: {
                        [key: string]: string;
                    } | undefined;
                };
                "text/html": {
                    step?: string | undefined;
                    data?: {
                        [key: string]: string;
                    } | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
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
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        step?: string | undefined;
                        data?: {
                            [key: string]: string;
                        } | undefined;
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
