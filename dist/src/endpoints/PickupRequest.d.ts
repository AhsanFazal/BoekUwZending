import { components, operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class PickupRequestEndpoint extends BaseEndpoint {
    get(query: operations["getPickupRequestCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "_order[relation.name]"?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
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
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
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
    create(body: components["schemas"]["PickupRequest-pickup_request-collection-write"]): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
                "application/vnd.api+json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
                "text/html": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        relation: {
                            name: string;
                            number?: string | undefined;
                        };
                        user?: {
                            name?: string | undefined;
                        } | undefined;
                        distributor: string;
                        pickupAddress: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        };
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
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
    updateById(id: string, body: components["schemas"]["PickupRequest-pickup_request-collection-write"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/merge-patch+json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
                "application/vnd.api+json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
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
    deleteById(id: string): Promise<import("openapi-fetch").FetchResponse<{
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
    replaceById(id: string, body: components["schemas"]["PickupRequest-pickup_request-collection-write"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
                "application/vnd.api+json": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
                "text/html": {
                    relation: string;
                    user?: string | undefined;
                    distributor: string;
                    pickupAddress: string;
                    pickupAt: string;
                    quantity: number;
                    pickup?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        relation: string;
                        user?: string | undefined;
                        distributor: string;
                        pickupAddress: string;
                        pickupAt: string;
                        quantity: number;
                        pickup?: string | undefined;
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
