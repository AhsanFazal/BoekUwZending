import { BaseEndpoint } from "../../Base";
export declare class Regions extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "_order[name]"?: string | undefined;
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
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
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
                    name: string;
                    depot?: string | undefined;
                };
                "application/vnd.api+json": {
                    name: string;
                    depot?: string | undefined;
                };
                "text/html": {
                    name: string;
                    depot?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
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
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
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
                    name: string;
                    depot?: {
                        region?: string | undefined;
                        key?: string | undefined;
                        description: string;
                        vehicles?: string[] | undefined;
                        distributor: string;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            stateOrProvince?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                            coordinates?: {
                                x?: number | undefined;
                                y?: number | undefined;
                                srid?: number | undefined;
                                latitude?: number | undefined;
                                longitude?: number | undefined;
                                type?: string | undefined;
                            } | undefined;
                            benelux?: boolean | undefined;
                            eU?: boolean | undefined;
                            europe?: boolean | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    } | undefined;
                    postcodes?: string[] | undefined;
                    id?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
                "application/vnd.api+json": {
                    name: string;
                    depot?: {
                        region?: string | undefined;
                        key?: string | undefined;
                        description: string;
                        vehicles?: string[] | undefined;
                        distributor: string;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            stateOrProvince?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                            coordinates?: {
                                x?: number | undefined;
                                y?: number | undefined;
                                srid?: number | undefined;
                                latitude?: number | undefined;
                                longitude?: number | undefined;
                                type?: string | undefined;
                            } | undefined;
                            benelux?: boolean | undefined;
                            eU?: boolean | undefined;
                            europe?: boolean | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    } | undefined;
                    postcodes?: string[] | undefined;
                    id?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
                "text/html": {
                    name: string;
                    depot?: {
                        region?: string | undefined;
                        key?: string | undefined;
                        description: string;
                        vehicles?: string[] | undefined;
                        distributor: string;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            stateOrProvince?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                            coordinates?: {
                                x?: number | undefined;
                                y?: number | undefined;
                                srid?: number | undefined;
                                latitude?: number | undefined;
                                longitude?: number | undefined;
                                type?: string | undefined;
                            } | undefined;
                            benelux?: boolean | undefined;
                            eU?: boolean | undefined;
                            europe?: boolean | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        required?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    } | undefined;
                    postcodes?: string[] | undefined;
                    id?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        name: string;
                        depot?: {
                            description: string;
                        } | undefined;
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
