import { BaseEndpoint } from "../../Base";
export declare class Positions extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                "vehicle.id"?: unknown;
                "vehicle.id[]"?: unknown;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    vehicle?: string | undefined;
                    route?: string | undefined;
                    locationDetails?: {
                        coordinates?: Record<string, never> | undefined;
                        bearing?: number | undefined;
                        speed?: number | undefined;
                        datetime?: string | undefined;
                    } | undefined;
                    id?: string | undefined;
                };
                "application/vnd.api+json": {
                    vehicle?: string | undefined;
                    route?: string | undefined;
                    locationDetails?: {
                        coordinates?: Record<string, never> | undefined;
                        bearing?: number | undefined;
                        speed?: number | undefined;
                        datetime?: string | undefined;
                    } | undefined;
                    id?: string | undefined;
                };
                "text/html": {
                    vehicle?: string | undefined;
                    route?: string | undefined;
                    locationDetails?: {
                        coordinates?: Record<string, never> | undefined;
                        bearing?: number | undefined;
                        speed?: number | undefined;
                        datetime?: string | undefined;
                    } | undefined;
                    id?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
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
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        vehicle?: string | undefined;
                        route?: string | undefined;
                        locationDetails?: {
                            coordinates?: Record<string, never> | undefined;
                            bearing?: number | undefined;
                            speed?: number | undefined;
                            datetime?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
