import { BaseEndpoint } from "./Base";
export declare class Relation extends BaseEndpoint {
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
                        name: string;
                        number?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        name: string;
                        number?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        name: string;
                        number?: string | undefined;
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
                        name: string;
                        number?: string | undefined;
                        id?: string | undefined;
                        conversation?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name: string;
                        number?: string | undefined;
                        id?: string | undefined;
                        conversation?: string | undefined;
                    };
                    "text/html": {
                        name: string;
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
