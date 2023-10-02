import { BaseEndpoint } from "./Base";
export declare class Matrix extends BaseEndpoint {
    getMatrices(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    getMatricesById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        group?: string | undefined;
                        name: string;
                        rates?: {
                            service: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            };
                            price?: number | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        maxDimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        maxWeight?: number | undefined;
                        active?: boolean | undefined;
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
    getMatrixGroups(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        name: string;
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        name: string;
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    getMatrixGroupsById(id: any): Promise<import("openapi-fetch").FetchResponse<{
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
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name: string;
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name: string;
                        matrices?: {
                            name: string;
                            rates?: {
                                service: {
                                    key?: string | undefined;
                                    name?: string | undefined;
                                    id?: string | undefined;
                                    pickupPoint?: boolean | undefined;
                                    distributorIdentifier?: string | undefined;
                                };
                                price?: number | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            maxDimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            maxWeight?: number | undefined;
                            active?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[] | undefined;
                        relation: string;
                        countries?: string[] | undefined;
                        postcodes?: {
                            country: string;
                            ranges?: string[] | undefined;
                        }[] | undefined;
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
    getMatrixPostcodes(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
    getMatrixPostcodesById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    getMatrixRates(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
    getMatrixRatesById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
