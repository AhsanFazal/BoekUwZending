import { BaseEndpoint } from "../../Base";
export declare class Drivers extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
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
    updateById(id: any, body: any): Promise<import("openapi-fetch").FetchResponse<{
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
    replaceById(id: any, body: any): Promise<import("openapi-fetch").FetchResponse<{
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
