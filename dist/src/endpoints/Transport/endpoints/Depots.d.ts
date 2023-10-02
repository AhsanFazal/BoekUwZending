import { BaseEndpoint } from "../../Base";
export declare class Depots extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "exists[key]"?: boolean | undefined;
                "_order[description]"?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    timeWindow?: {
                        begin?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
                "application/vnd.api+json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    timeWindow?: {
                        begin?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
                "text/html": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    timeWindow?: {
                        begin?: string | undefined;
                        end?: string | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        key?: string | undefined;
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
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
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    updateById(id: any, body: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/merge-patch+json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
                "application/vnd.api+json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
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
    replaceById(id: any, body: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
                "application/vnd.api+json": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
                "text/html": {
                    description: string;
                    distributor: string;
                    address?: {
                        addressLine1?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        country?: string | undefined;
                        coordinates?: Record<string, never> | undefined;
                    } | undefined;
                    required?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        description: string;
                        distributor: {
                            name: string;
                            id?: string | undefined;
                        };
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
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
