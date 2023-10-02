import { BaseEndpoint } from "../../Base";
export declare class Steps extends BaseEndpoint {
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
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
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
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        address?: {
                            addressLine1?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            coordinates?: Record<string, never> | undefined;
                        } | undefined;
                        phoneNumber?: Record<string, never> | undefined;
                        depot?: {
                            description: string;
                            distributor: string;
                            id?: string | undefined;
                        } | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: {
                            task: string;
                            description?: string | undefined;
                            reference?: string | undefined;
                            address?: {
                                addressLine1?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                            phoneNumber?: Record<string, never> | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        }[] | undefined;
                        id?: string | undefined;
                    };
                };
            };
            404: {
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
