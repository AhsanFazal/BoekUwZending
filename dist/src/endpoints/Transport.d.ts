import { components, operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class TransportEndpoint extends BaseEndpoint {
    depots: Depots;
    drivers: Drivers;
    constructor(httpClient: BaseEndpoint["httpClient"]);
}
declare class Depots extends BaseEndpoint {
    get(query: operations["getDepotCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
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
    create(body: components["schemas"]["Depot-transport-depot-collection-write"]): Promise<import("openapi-fetch").FetchResponse<{
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
    updateById(id: string, body: components["schemas"]["Depot-transport-depot-item-write"]): Promise<import("openapi-fetch").FetchResponse<{
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
    replaceById(id: string, body: components["schemas"]["Depot-transport-depot-item-write"]): Promise<import("openapi-fetch").FetchResponse<{
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
declare class Drivers extends BaseEndpoint {
    get(query: operations["getDriverCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "_order[fullName]"?: string | undefined;
                "_order[employmentStartedAt]"?: string | undefined;
                hasActiveEmployment?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    create(body: components["schemas"]["Driver-transport-driver-collection-write"]): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
                "application/vnd.api+json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
                "text/html": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
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
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
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
    updateById(id: string, body: components["schemas"]["Driver-transport-driver-item-write"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/merge-patch+json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
                "application/vnd.api+json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
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
    replaceById(id: string, body: components["schemas"]["Driver-transport-driver-item-write"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
                "application/vnd.api+json": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
                "text/html": {
                    firstName: string;
                    lastNamePrefix?: string | undefined;
                    lastName: string;
                    phoneNumber: Record<string, never>;
                    availableDays: string[];
                    employmentStartedAt: string;
                    employmentEndedAt?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name?: string | undefined;
                        firstName: string;
                        lastNamePrefix?: string | undefined;
                        lastName: string;
                        phoneNumber: Record<string, never>;
                        availableDays: string[];
                        employmentStartedAt: string;
                        employmentEndedAt?: string | undefined;
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
}
export {};
