import { BaseEndpoint } from "../../Base";
export declare class Postcodes extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "_order[postcode]"?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
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
                    region?: string | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
                "application/vnd.api+json": {
                    region?: string | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
                "text/html": {
                    region?: string | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
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
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
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
                "application/json": {
                    region?: {
                        name: string;
                    } | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
                "application/vnd.api+json": {
                    region?: {
                        name: string;
                    } | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
                "text/html": {
                    region?: {
                        name: string;
                    } | undefined;
                    postcode: number;
                    enabled?: boolean | undefined;
                    preferCar?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        region?: {
                            name: string;
                        } | undefined;
                        postcode: number;
                        enabled?: boolean | undefined;
                        preferCar?: boolean | undefined;
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
    deleteById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            204: {
                content: {};
            };
            404: {
                content: {};
            };
        };
    }>>;
}
