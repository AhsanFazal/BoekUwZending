import { operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class DistributorEndpoint extends BaseEndpoint {
    get(query: operations["getDistributorCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
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
    getById(id: string): Promise<import("openapi-fetch").FetchResponse<{
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
