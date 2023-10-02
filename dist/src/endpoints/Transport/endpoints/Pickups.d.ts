import { BaseEndpoint } from "../../Base";
export declare class Pickups extends BaseEndpoint {
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
                        addressBookItem: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: Record<string, never> | undefined;
                        };
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: {
                            description: string;
                        }[] | undefined;
                    }[];
                    "application/vnd.api+json": {
                        addressBookItem: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: Record<string, never> | undefined;
                        };
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: {
                            description: string;
                        }[] | undefined;
                    }[];
                    "text/html": {
                        addressBookItem: {
                            contact?: {
                                name?: string | undefined;
                                company?: string | undefined;
                            } | undefined;
                            address?: Record<string, never> | undefined;
                        };
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: {
                            description: string;
                        }[] | undefined;
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
                        addressBookItem: string;
                        timeWindow?: Record<string, never> | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: string[] | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        addressBookItem: string;
                        timeWindow?: Record<string, never> | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: string[] | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        addressBookItem: string;
                        timeWindow?: Record<string, never> | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        depots?: string[] | undefined;
                        id?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    excluded: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    _global_search?: string | undefined;
                    "_global_search.properties"?: string | undefined;
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
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "application/vnd.api+json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "text/html": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
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
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date: string;
                            description: string;
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
        create: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        date: string;
                        description: string;
                    };
                    "application/vnd.api+json": {
                        date: string;
                        description: string;
                    };
                    "text/html": {
                        date: string;
                        description: string;
                    };
                };
            } | undefined;
            responses: {
                201: {
                    content: {
                        "application/json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date: string;
                            description: string;
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
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": {
                        date: string;
                        description: string;
                    };
                    "application/vnd.api+json": {
                        date: string;
                        description: string;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date: string;
                            description: string;
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
        replaceById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        date: string;
                        description: string;
                    };
                    "application/vnd.api+json": {
                        date: string;
                        description: string;
                    };
                    "text/html": {
                        date: string;
                        description: string;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date: string;
                            description: string;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date: string;
                            description: string;
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
    };
    requests: {
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
                        "application/json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "application/vnd.api+json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "text/html": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
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
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date?: string | undefined;
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
        create: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        date?: string | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        date?: string | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        date?: string | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                };
            } | undefined;
            responses: {
                201: {
                    content: {
                        "application/json": {
                            date?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date?: string | undefined;
                        };
                        "text/html": {
                            date?: string | undefined;
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
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": {
                        date?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        date?: string | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date?: string | undefined;
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
        deleteById: (id: any) => Promise<import("openapi-fetch").FetchResponse<{
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
        replaceById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        date?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        date?: string | undefined;
                    };
                    "text/html": {
                        date?: string | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            date?: string | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            date?: string | undefined;
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
    };
    schedules: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    _global_search?: string | undefined;
                    "_global_search.properties"?: string | undefined;
                    _page?: number | undefined;
                    _items_per_page?: number | undefined;
                    _pagination?: boolean | undefined;
                } | undefined;
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: {
                                description?: string | undefined;
                            }[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: {
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
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "application/vnd.api+json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: {
                                description?: string | undefined;
                            }[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: {
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
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        }[];
                        "text/html": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: {
                                description?: string | undefined;
                            }[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: {
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
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
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
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
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
        create: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                        transportTasks?: string[] | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                };
            } | undefined;
            responses: {
                201: {
                    content: {
                        "application/json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: string | undefined;
                            depots?: string[] | undefined;
                        };
                        "application/vnd.api+json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: string | undefined;
                            depots?: string[] | undefined;
                        };
                        "text/html": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: string | undefined;
                            depots?: string[] | undefined;
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
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/merge-patch+json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                    };
                    "application/vnd.api+json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
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
        replaceById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                    };
                    "application/vnd.api+json": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                    };
                    "text/html": {
                        instructions?: string | undefined;
                        active?: boolean | undefined;
                        days?: string[] | undefined;
                        vehicles?: string[] | undefined;
                        arriveEmpty?: boolean | undefined;
                        addressBookItem: string;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        relation?: string | undefined;
                        depots?: string[] | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                        };
                        "text/html": {
                            instructions?: string | undefined;
                            active?: boolean | undefined;
                            days?: string[] | undefined;
                            vehicles?: string[] | undefined;
                            arriveEmpty?: boolean | undefined;
                            addressBookItem: string;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            relation?: {
                                name: string;
                                number?: string | undefined;
                            } | undefined;
                            depots?: {
                                description: string;
                            }[] | undefined;
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
    };
}
