import { BaseEndpoint } from "./Base";
export declare class Shipment extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                status?: string | undefined;
                "status[]"?: string[] | undefined;
                invoiceReference?: string | undefined;
                "rate.distributor.code"?: string | undefined;
                "rate.distributor.code[]"?: string[] | undefined;
                draft?: boolean | undefined;
                "_order[sequence.number]"?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        bulk?: {
                            reference?: string | undefined;
                        } | undefined;
                        vehicle?: {
                            type?: string | undefined;
                        } | undefined;
                        transportSteps?: readonly {
                            route?: {
                                collection?: {
                                    date: string;
                                } | undefined;
                                sequence?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        status?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        shipFrom?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        shipTo?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        dispatch?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        delivery?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        bulk?: {
                            reference?: string | undefined;
                        } | undefined;
                        vehicle?: {
                            type?: string | undefined;
                        } | undefined;
                        transportSteps?: readonly {
                            route?: {
                                collection?: {
                                    date: string;
                                } | undefined;
                                sequence?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        status?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        shipFrom?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        shipTo?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        dispatch?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        delivery?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                    "text/html": {
                        bulk?: {
                            reference?: string | undefined;
                        } | undefined;
                        vehicle?: {
                            type?: string | undefined;
                        } | undefined;
                        transportSteps?: readonly {
                            route?: {
                                collection?: {
                                    date: string;
                                } | undefined;
                                sequence?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        status?: string | undefined;
                        relation?: {
                            name: string;
                            number?: string | undefined;
                        } | undefined;
                        shipFrom?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        shipTo?: {
                            address?: {
                                postcode?: string | undefined;
                                city?: string | undefined;
                                country?: string | undefined;
                                coordinates?: Record<string, never> | undefined;
                            } | undefined;
                        } | undefined;
                        dispatch?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        delivery?: {
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                        } | undefined;
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    items?: {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    }[] | undefined;
                    pickupPoint?: {
                        identifier?: string | undefined;
                        distributorCode?: string | undefined;
                        name?: string | undefined;
                        country?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        street?: string | undefined;
                        number?: string | undefined;
                    } | undefined;
                    invoiceReference?: string | undefined;
                    labels?: string[] | undefined;
                    options?: {
                        surchargeSet?: string | undefined;
                        manual?: boolean | undefined;
                    }[] | undefined;
                    related?: any | undefined;
                    fulfilment?: {
                        instructions?: string | undefined;
                    } | undefined;
                    transportType?: Record<string, never> | undefined;
                    service?: string | undefined;
                    shipFrom?: {
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
                    } | undefined;
                    shipTo?: {
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
                    } | undefined;
                    dispatch?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    delivery?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    incoTerms?: string | undefined;
                    insurance?: {
                        deductibleExcess?: number | undefined;
                        insuredValue?: number | undefined;
                    } | undefined;
                    draft?: boolean | undefined;
                    dpdCustomerNumber?: string | undefined;
                    dpdDepotCode?: string | undefined;
                };
                "application/vnd.api+json": {
                    items?: {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    }[] | undefined;
                    pickupPoint?: {
                        identifier?: string | undefined;
                        distributorCode?: string | undefined;
                        name?: string | undefined;
                        country?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        street?: string | undefined;
                        number?: string | undefined;
                    } | undefined;
                    invoiceReference?: string | undefined;
                    labels?: string[] | undefined;
                    options?: {
                        surchargeSet?: string | undefined;
                        manual?: boolean | undefined;
                    }[] | undefined;
                    related?: any | undefined;
                    fulfilment?: {
                        instructions?: string | undefined;
                    } | undefined;
                    transportType?: Record<string, never> | undefined;
                    service?: string | undefined;
                    shipFrom?: {
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
                    } | undefined;
                    shipTo?: {
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
                    } | undefined;
                    dispatch?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    delivery?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    incoTerms?: string | undefined;
                    insurance?: {
                        deductibleExcess?: number | undefined;
                        insuredValue?: number | undefined;
                    } | undefined;
                    draft?: boolean | undefined;
                    dpdCustomerNumber?: string | undefined;
                    dpdDepotCode?: string | undefined;
                };
                "text/html": {
                    items?: {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    }[] | undefined;
                    pickupPoint?: {
                        identifier?: string | undefined;
                        distributorCode?: string | undefined;
                        name?: string | undefined;
                        country?: string | undefined;
                        postcode?: string | undefined;
                        city?: string | undefined;
                        street?: string | undefined;
                        number?: string | undefined;
                    } | undefined;
                    invoiceReference?: string | undefined;
                    labels?: string[] | undefined;
                    options?: {
                        surchargeSet?: string | undefined;
                        manual?: boolean | undefined;
                    }[] | undefined;
                    related?: any | undefined;
                    fulfilment?: {
                        instructions?: string | undefined;
                    } | undefined;
                    transportType?: Record<string, never> | undefined;
                    service?: string | undefined;
                    shipFrom?: {
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
                    } | undefined;
                    shipTo?: {
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
                    } | undefined;
                    dispatch?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    delivery?: {
                        instructions?: string | undefined;
                        reference?: string | undefined;
                        date?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        vatNumber?: string | undefined;
                        eoriNumber?: string | undefined;
                    } | undefined;
                    incoTerms?: string | undefined;
                    insurance?: {
                        deductibleExcess?: number | undefined;
                        insuredValue?: number | undefined;
                    } | undefined;
                    draft?: boolean | undefined;
                    dpdCustomerNumber?: string | undefined;
                    dpdDepotCode?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "text/html": {
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
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
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "text/html": {
                        createdAt?: string | undefined;
                        items?: {
                            contents?: {
                                description: string;
                                tariffNumber?: string | undefined;
                                countryOfOrigin?: string | undefined;
                                quantity?: number | undefined;
                                weight?: string | undefined;
                                value?: number | undefined;
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                            }[] | undefined;
                            quantity?: number | undefined;
                            type?: {
                                description: string;
                                id?: string | undefined;
                            } | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            customerReference2?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        pickupPoint?: {
                            identifier?: string | undefined;
                            distributorCode?: string | undefined;
                            name?: string | undefined;
                            country?: string | undefined;
                            postcode?: string | undefined;
                            city?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                        } | undefined;
                        invoiceReference?: string | undefined;
                        labels?: {
                            waybill?: string | undefined;
                            reference?: string | undefined;
                            status?: string | undefined;
                            trackAndTraceLink?: string | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        options?: {
                            surchargeSet?: string | undefined;
                            manual?: boolean | undefined;
                        }[] | undefined;
                        fulfilment?: {
                            instructions?: string | undefined;
                        } | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: string | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        incoTerms?: string | undefined;
                        insurance?: {
                            deductibleExcess?: number | undefined;
                            insuredValue?: number | undefined;
                        } | undefined;
                        draft?: boolean | undefined;
                        dpdCustomerNumber?: string | undefined;
                        dpdDepotCode?: string | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    getShipmentItemsById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    };
                    "text/html": {
                        contents?: {
                            description: string;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                            quantity?: number | undefined;
                            weight?: string | undefined;
                            value?: number | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                        quantity?: number | undefined;
                        type?: string | undefined;
                        stackable?: boolean | undefined;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: string | undefined;
                        description?: string | undefined;
                        value?: number | undefined;
                        customerReference?: string | undefined;
                        customerReference2?: string | undefined;
                        tariffNumber?: string | undefined;
                        countryOfOrigin?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    getShipmentLabels(id: any, query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                "shipment.id"?: unknown;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        shipment?: string | undefined;
                        distributor?: string | undefined;
                        trackings?: string[] | undefined;
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        mailSentAt?: string | undefined;
                        podAvailable?: boolean | undefined;
                        distributorHasPodAvailable?: boolean | undefined;
                        receiverName?: string | undefined;
                        status?: string | undefined;
                        nextTrackingUpdate?: string | undefined;
                        lastProcessedTime?: string | undefined;
                        transportTasks?: string[] | undefined;
                        trackAndTraceLink?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
                        shipmentItem?: string | undefined;
                        mailSent?: boolean | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        shipment?: string | undefined;
                        distributor?: string | undefined;
                        trackings?: string[] | undefined;
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        mailSentAt?: string | undefined;
                        podAvailable?: boolean | undefined;
                        distributorHasPodAvailable?: boolean | undefined;
                        receiverName?: string | undefined;
                        status?: string | undefined;
                        nextTrackingUpdate?: string | undefined;
                        lastProcessedTime?: string | undefined;
                        transportTasks?: string[] | undefined;
                        trackAndTraceLink?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
                        shipmentItem?: string | undefined;
                        mailSent?: boolean | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    }[];
                    "text/html": {
                        shipment?: string | undefined;
                        distributor?: string | undefined;
                        trackings?: string[] | undefined;
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        mailSentAt?: string | undefined;
                        podAvailable?: boolean | undefined;
                        distributorHasPodAvailable?: boolean | undefined;
                        receiverName?: string | undefined;
                        status?: string | undefined;
                        nextTrackingUpdate?: string | undefined;
                        lastProcessedTime?: string | undefined;
                        transportTasks?: string[] | undefined;
                        trackAndTraceLink?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
                        shipmentItem?: string | undefined;
                        mailSent?: boolean | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    }[];
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    getQuotations(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                    "text/html": {
                        id?: string | undefined;
                        sequence?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    getQuotationById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        rejectionRemark?: string | undefined;
                        shipment?: {
                            status?: string | undefined;
                            transportType?: Record<string, never> | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            shipFrom?: {
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
                            } | undefined;
                            shipTo?: {
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
                            } | undefined;
                            dispatch?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            delivery?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        items?: {
                            quantity?: number | undefined;
                            type?: string | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        reference?: string | undefined;
                        salesRate?: {
                            distributor?: {
                                name: string;
                                code: string;
                                id?: string | undefined;
                            } | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            price?: number | undefined;
                        } | undefined;
                        sentAt?: string | undefined;
                        expiresAt?: string | undefined;
                        acceptedAt?: string | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: {
                            key?: string | undefined;
                            name?: string | undefined;
                            id?: string | undefined;
                            pickupPoint?: boolean | undefined;
                            distributorIdentifier?: string | undefined;
                        } | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        rejectionRemark?: string | undefined;
                        shipment?: {
                            status?: string | undefined;
                            transportType?: Record<string, never> | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            shipFrom?: {
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
                            } | undefined;
                            shipTo?: {
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
                            } | undefined;
                            dispatch?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            delivery?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        items?: {
                            quantity?: number | undefined;
                            type?: string | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        reference?: string | undefined;
                        salesRate?: {
                            distributor?: {
                                name: string;
                                code: string;
                                id?: string | undefined;
                            } | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            price?: number | undefined;
                        } | undefined;
                        sentAt?: string | undefined;
                        expiresAt?: string | undefined;
                        acceptedAt?: string | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: {
                            key?: string | undefined;
                            name?: string | undefined;
                            id?: string | undefined;
                            pickupPoint?: boolean | undefined;
                            distributorIdentifier?: string | undefined;
                        } | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                    "text/html": {
                        rejectionRemark?: string | undefined;
                        shipment?: {
                            status?: string | undefined;
                            transportType?: Record<string, never> | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            shipFrom?: {
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
                            } | undefined;
                            shipTo?: {
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
                            } | undefined;
                            dispatch?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            delivery?: {
                                instructions?: string | undefined;
                                reference?: string | undefined;
                                date?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                vatNumber?: string | undefined;
                                eoriNumber?: string | undefined;
                            } | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        items?: {
                            quantity?: number | undefined;
                            type?: string | undefined;
                            stackable?: boolean | undefined;
                            dimensions?: {
                                length?: number | undefined;
                                width?: number | undefined;
                                height?: number | undefined;
                            } | undefined;
                            weight?: string | undefined;
                            description?: string | undefined;
                            value?: number | undefined;
                            customerReference?: string | undefined;
                            tariffNumber?: string | undefined;
                            countryOfOrigin?: string | undefined;
                        }[] | undefined;
                        reference?: string | undefined;
                        salesRate?: {
                            distributor?: {
                                name: string;
                                code: string;
                                id?: string | undefined;
                            } | undefined;
                            service?: {
                                key?: string | undefined;
                                name?: string | undefined;
                                id?: string | undefined;
                                pickupPoint?: boolean | undefined;
                                distributorIdentifier?: string | undefined;
                            } | undefined;
                            price?: number | undefined;
                        } | undefined;
                        sentAt?: string | undefined;
                        expiresAt?: string | undefined;
                        acceptedAt?: string | undefined;
                        status?: string | undefined;
                        transportType?: Record<string, never> | undefined;
                        service?: {
                            key?: string | undefined;
                            name?: string | undefined;
                            id?: string | undefined;
                            pickupPoint?: boolean | undefined;
                            distributorIdentifier?: string | undefined;
                        } | undefined;
                        shipFrom?: {
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
                        } | undefined;
                        shipTo?: {
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
                        } | undefined;
                        dispatch?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        delivery?: {
                            instructions?: string | undefined;
                            reference?: string | undefined;
                            date?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            vatNumber?: string | undefined;
                            eoriNumber?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        conversation?: {
                            id?: string | undefined;
                        } | undefined;
                        sequence?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
