import { operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class AddressBookEndpoint extends BaseEndpoint {
    get(query: operations["getAddressBookItemsCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                "relation.id"?: unknown;
                "relation.id[]"?: unknown;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        reference?: string | undefined;
                        type?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        reference?: string | undefined;
                        type?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        reference?: string | undefined;
                        type?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        id?: string | undefined;
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
                        reference?: string | undefined;
                        type?: string | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        instructions?: string | undefined;
                        vatNumber?: string | undefined;
                        timeWindow?: Record<string, never> | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        reference?: string | undefined;
                        type?: string | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        instructions?: string | undefined;
                        vatNumber?: string | undefined;
                        timeWindow?: Record<string, never> | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        reference?: string | undefined;
                        type?: string | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        contact?: {
                            name?: string | undefined;
                            company?: string | undefined;
                            phoneNumber?: Record<string, never> | undefined;
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
                        instructions?: string | undefined;
                        vatNumber?: string | undefined;
                        timeWindow?: Record<string, never> | undefined;
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
