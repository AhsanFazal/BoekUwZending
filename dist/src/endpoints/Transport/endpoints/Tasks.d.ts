import { BaseEndpoint } from "../../Base";
export declare class Tasks extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                "_order[dateRange.begin]"?: string | undefined;
                "dateRange.begin[before]"?: string | undefined;
                "dateRange.begin[strictly_before]"?: string | undefined;
                "dateRange.begin[after]"?: string | undefined;
                "dateRange.begin[strictly_after]"?: string | undefined;
                "dateRange.end[before]"?: string | undefined;
                "dateRange.end[strictly_before]"?: string | undefined;
                "dateRange.end[after]"?: string | undefined;
                "dateRange.end[strictly_after]"?: string | undefined;
                status?: string | undefined;
                "status[]"?: string[] | undefined;
                deliveryStatus?: string | undefined;
                "deliveryStatus[]"?: string[] | undefined;
                "region.depot.id"?: unknown;
                "region.depot.id[]"?: unknown;
                "exists[pickupActivity.step]"?: boolean | undefined;
                "exists[status]"?: boolean | undefined;
                "exists[followUpTask]"?: boolean | undefined;
                error?: boolean | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    }[];
                    "application/vnd.api+json": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    }[];
                    "text/html": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    driver?: string | undefined;
                                    coDriver?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
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
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    };
                    "application/vnd.api+json": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    };
                    "text/html": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
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
                    dateRange?: {
                        begin: string;
                        end: string;
                    } | undefined;
                };
                "application/vnd.api+json": {
                    dateRange?: {
                        begin: string;
                        end: string;
                    } | undefined;
                };
                "text/html": {
                    dateRange?: {
                        begin: string;
                        end: string;
                    } | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    };
                    "application/vnd.api+json": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                    };
                    "text/html": {
                        followUpTask?: any | undefined;
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                        pickupActivity?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        } | undefined;
                        deliveryActivities?: {
                            description?: string | undefined;
                            depot?: string | undefined;
                            action: string;
                            reference?: string | undefined;
                            instructions?: string | undefined;
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
                            step?: {
                                number?: number | undefined;
                                route?: {
                                    collection?: {
                                        date: string;
                                        id?: string | undefined;
                                    } | undefined;
                                    sequence?: number | undefined;
                                    vehicle?: {
                                        description?: string | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                } | undefined;
                            } | undefined;
                        }[] | undefined;
                        skills?: string[] | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
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
    activities: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
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
        getById: (id: any) => Promise<import("openapi-fetch").FetchResponse<{
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
    };
    labels: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    "label.shipment.status"?: string | undefined;
                    "label.shipment.status[]"?: string[] | undefined;
                    _global_search?: string | undefined;
                    "_global_search.properties"?: string | undefined;
                    "_order[dateRange.begin]"?: string | undefined;
                    "dateRange.begin[before]"?: string | undefined;
                    "dateRange.begin[strictly_before]"?: string | undefined;
                    "dateRange.begin[after]"?: string | undefined;
                    "dateRange.begin[strictly_after]"?: string | undefined;
                    "dateRange.end[before]"?: string | undefined;
                    "dateRange.end[strictly_before]"?: string | undefined;
                    "dateRange.end[after]"?: string | undefined;
                    "dateRange.end[strictly_after]"?: string | undefined;
                    status?: string | undefined;
                    "status[]"?: string[] | undefined;
                    deliveryStatus?: string | undefined;
                    "deliveryStatus[]"?: string[] | undefined;
                    "region.depot.id"?: unknown;
                    "region.depot.id[]"?: unknown;
                    "exists[pickupActivity.step]"?: boolean | undefined;
                    "exists[status]"?: boolean | undefined;
                    "exists[followUpTask]"?: boolean | undefined;
                    error?: boolean | undefined;
                    _page?: number | undefined;
                    _items_per_page?: number | undefined;
                    _pagination?: boolean | undefined;
                } | undefined;
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            label?: {
                                shipment?: {
                                    bulk?: string | undefined;
                                    status?: string | undefined;
                                    shipTo?: Record<string, never> | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            recomputeType?: Record<string, never> | undefined;
                            recomputedBy?: {
                                name?: string | undefined;
                            } | undefined;
                            recomputedAt?: string | undefined;
                            followUpTask?: {
                                recomputeType?: Record<string, never> | undefined;
                                recomputedBy?: {
                                    name?: string | undefined;
                                } | undefined;
                                recomputedAt?: string | undefined;
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                bulk?: string | undefined;
                                status?: string | undefined;
                                shipTo?: Record<string, never> | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                        "application/vnd.api+json": {
                            label?: {
                                shipment?: {
                                    bulk?: string | undefined;
                                    status?: string | undefined;
                                    shipTo?: Record<string, never> | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            recomputeType?: Record<string, never> | undefined;
                            recomputedBy?: {
                                name?: string | undefined;
                            } | undefined;
                            recomputedAt?: string | undefined;
                            followUpTask?: {
                                recomputeType?: Record<string, never> | undefined;
                                recomputedBy?: {
                                    name?: string | undefined;
                                } | undefined;
                                recomputedAt?: string | undefined;
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                bulk?: string | undefined;
                                status?: string | undefined;
                                shipTo?: Record<string, never> | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                        "text/html": {
                            label?: {
                                shipment?: {
                                    bulk?: string | undefined;
                                    status?: string | undefined;
                                    shipTo?: Record<string, never> | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            recomputeType?: Record<string, never> | undefined;
                            recomputedBy?: {
                                name?: string | undefined;
                            } | undefined;
                            recomputedAt?: string | undefined;
                            followUpTask?: {
                                recomputeType?: Record<string, never> | undefined;
                                recomputedBy?: {
                                    name?: string | undefined;
                                } | undefined;
                                recomputedAt?: string | undefined;
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                bulk?: string | undefined;
                                status?: string | undefined;
                                shipTo?: Record<string, never> | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                    };
                };
            };
        }>>;
        getById: (id: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "application/vnd.api+json": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "text/html": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                    };
                };
                404: {
                    content: {};
                };
            };
        }>>;
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                    "application/vnd.api+json": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                    "text/html": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "application/vnd.api+json": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "text/html": {
                            label?: {
                                shipment?: {
                                    shipFrom?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    shipTo?: {
                                        contact?: {
                                            name?: string | undefined;
                                            company?: string | undefined;
                                            phoneNumber?: Record<string, never> | undefined;
                                            emailAddress?: string | undefined;
                                        } | undefined;
                                        address?: {
                                            addressLine1?: string | undefined;
                                            postcode?: string | undefined;
                                            city?: string | undefined;
                                            country?: string | undefined;
                                            coordinates?: Record<string, never> | undefined;
                                        } | undefined;
                                    } | undefined;
                                    id?: string | undefined;
                                    sequence?: string | undefined;
                                } | undefined;
                                waybill?: string | undefined;
                            } | undefined;
                            inbound?: boolean | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            shipment?: {
                                shipFrom?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                shipTo?: {
                                    contact?: {
                                        name?: string | undefined;
                                        company?: string | undefined;
                                        phoneNumber?: Record<string, never> | undefined;
                                        emailAddress?: string | undefined;
                                    } | undefined;
                                    address?: {
                                        addressLine1?: string | undefined;
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                        coordinates?: Record<string, never> | undefined;
                                    } | undefined;
                                } | undefined;
                                id?: string | undefined;
                                sequence?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
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
    };
    pickups: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    "_order[dateRange.begin]"?: string | undefined;
                    "dateRange.begin[before]"?: string | undefined;
                    "dateRange.begin[strictly_before]"?: string | undefined;
                    "dateRange.begin[after]"?: string | undefined;
                    "dateRange.begin[strictly_after]"?: string | undefined;
                    "dateRange.end[before]"?: string | undefined;
                    "dateRange.end[strictly_before]"?: string | undefined;
                    "dateRange.end[after]"?: string | undefined;
                    "dateRange.end[strictly_after]"?: string | undefined;
                    status?: string | undefined;
                    "status[]"?: string[] | undefined;
                    deliveryStatus?: string | undefined;
                    "deliveryStatus[]"?: string[] | undefined;
                    "region.depot.id"?: unknown;
                    "region.depot.id[]"?: unknown;
                    "exists[pickupActivity.step]"?: boolean | undefined;
                    "exists[status]"?: boolean | undefined;
                    "exists[followUpTask]"?: boolean | undefined;
                    error?: boolean | undefined;
                    _page?: number | undefined;
                    _items_per_page?: number | undefined;
                    _pagination?: boolean | undefined;
                } | undefined;
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                        "application/vnd.api+json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                        "text/html": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            driver?: string | undefined;
                                            coDriver?: string | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        driver?: string | undefined;
                                        coDriver?: string | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        }[];
                    };
                };
            };
        }>>;
        getById: (id: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "application/vnd.api+json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "text/html": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                    };
                };
                404: {
                    content: {};
                };
            };
        }>>;
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                    "application/vnd.api+json": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                    "text/html": {
                        dateRange?: {
                            begin: string;
                            end: string;
                        } | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "application/vnd.api+json": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
                        };
                        "text/html": {
                            pickup?: string | undefined;
                            followUpTask?: {
                                followUpTask?: any | undefined;
                                dateRange?: {
                                    begin: string;
                                    end: string;
                                } | undefined;
                                pickupActivity?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                } | undefined;
                                deliveryActivities?: {
                                    description?: string | undefined;
                                    depot?: string | undefined;
                                    action: string;
                                    reference?: string | undefined;
                                    instructions?: string | undefined;
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
                                    step?: {
                                        number?: number | undefined;
                                        route?: {
                                            collection?: {
                                                date: string;
                                                id?: string | undefined;
                                            } | undefined;
                                            sequence?: number | undefined;
                                            vehicle?: {
                                                description?: string | undefined;
                                            } | undefined;
                                            id?: string | undefined;
                                        } | undefined;
                                    } | undefined;
                                }[] | undefined;
                                skills?: string[] | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                                relation?: {
                                    name: string;
                                    number?: string | undefined;
                                } | undefined;
                            } | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            dateRange?: {
                                begin: string;
                                end: string;
                            } | undefined;
                            pickupActivity?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            deliveryActivities?: {
                                description?: string | undefined;
                                depot?: string | undefined;
                                action: string;
                                reference?: string | undefined;
                                instructions?: string | undefined;
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
                                step?: {
                                    number?: number | undefined;
                                    route?: {
                                        collection?: {
                                            date: string;
                                            id?: string | undefined;
                                        } | undefined;
                                        sequence?: number | undefined;
                                        vehicle?: {
                                            description?: string | undefined;
                                        } | undefined;
                                        id?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            }[] | undefined;
                            skills?: string[] | undefined;
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
    };
}
