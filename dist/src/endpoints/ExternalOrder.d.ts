import { BaseEndpoint } from "./Base";
export declare class ExternalOrder extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                externalId?: string | undefined;
                "externalId[]"?: string[] | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        createdAtSource: string;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        createdAtSource: string;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        createdAtSource: string;
                        archived?: boolean | undefined;
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
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
                "application/vnd.api+json": {
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
                "text/html": {
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
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
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
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
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
                "application/vnd.api+json": {
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
                "text/html": {
                    externalId?: string | undefined;
                    reference?: string | undefined;
                    orderLines?: {
                        externalId?: string | undefined;
                        quantity?: number | undefined;
                        description?: string | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        value?: number | undefined;
                        tariffNumber?: string | undefined;
                    }[] | undefined;
                    createdAtSource: string;
                    shipTo?: {
                        contact?: {
                            plainPhoneNumber?: string | undefined;
                            name?: string | undefined;
                            company?: string | undefined;
                            emailAddress?: string | undefined;
                        } | undefined;
                        address?: {
                            street?: string | undefined;
                            number?: string | undefined;
                            numberAddition?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            country?: string | undefined;
                            addressLine1?: string | undefined;
                            addressLine2?: string | undefined;
                            privateAddress?: boolean | undefined;
                            forkliftOrLoadingDockAvailable?: boolean | undefined;
                            accessibleWithTrailer?: boolean | undefined;
                        } | undefined;
                    } | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        externalId?: string | undefined;
                        reference?: string | undefined;
                        orderLines?: {
                            externalId?: string | undefined;
                            quantity?: number | undefined;
                            description?: string | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: number | undefined;
                            value?: number | undefined;
                            tariffNumber?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        createdAtSource: string;
                        shipTo?: {
                            contact?: {
                                plainPhoneNumber?: string | undefined;
                                name?: string | undefined;
                                company?: string | undefined;
                                emailAddress?: string | undefined;
                            } | undefined;
                            address?: {
                                street?: string | undefined;
                                number?: string | undefined;
                                numberAddition?: string | undefined;
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                addressLine1?: string | undefined;
                                addressLine2?: string | undefined;
                                privateAddress?: boolean | undefined;
                                forkliftOrLoadingDockAvailable?: boolean | undefined;
                                accessibleWithTrailer?: boolean | undefined;
                            } | undefined;
                        } | undefined;
                        shipments?: readonly string[] | undefined;
                        archived?: boolean | undefined;
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
