import { BaseEndpoint } from "../../Base";
export declare class Routes extends BaseEndpoint {
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
                        collection?: string | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            description?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        collection?: string | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            description?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    }[];
                    "text/html": {
                        collection?: string | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            description?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
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
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
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
                    sequence?: number | undefined;
                    driver?: string | undefined;
                    coDriver?: string | undefined;
                    steps?: {
                        number?: number | undefined;
                        type: string;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                    }[] | undefined;
                };
                "application/vnd.api+json": {
                    sequence?: number | undefined;
                    driver?: string | undefined;
                    coDriver?: string | undefined;
                    steps?: {
                        number?: number | undefined;
                        type: string;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                    }[] | undefined;
                };
                "text/html": {
                    sequence?: number | undefined;
                    driver?: string | undefined;
                    coDriver?: string | undefined;
                    steps?: {
                        number?: number | undefined;
                        type: string;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                    }[] | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": {
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                    };
                    "text/html": {
                        collection?: {
                            status?: string | undefined;
                        } | undefined;
                        sequence?: number | undefined;
                        vehicle?: {
                            type?: string | undefined;
                            color?: string | undefined;
                            id?: string | undefined;
                        } | undefined;
                        driver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        coDriver?: {
                            name?: string | undefined;
                            phoneNumber: Record<string, never>;
                            id?: string | undefined;
                        } | undefined;
                        steps?: {
                            number?: number | undefined;
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
                            shipments?: {
                                status?: string | undefined;
                            }[] | undefined;
                            depot?: string | undefined;
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
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                            }[] | undefined;
                            id?: string | undefined;
                        }[] | undefined;
                        summary?: {
                            cost?: number | undefined;
                            pickup?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            delivery?: {
                                packages?: number | undefined;
                                volume?: number | undefined;
                                loadingMeters?: number | undefined;
                                weight?: number | undefined;
                            } | undefined;
                            loadPercentage?: number | undefined;
                            times?: {
                                setup?: number | undefined;
                                service?: number | undefined;
                                duration?: number | undefined;
                                waiting?: number | undefined;
                                total?: number | undefined;
                            } | undefined;
                            distance?: number | undefined;
                        } | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        geometry?: string | undefined;
                        syncedAt?: string | undefined;
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
    getStepsById(id: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
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
                        number?: number | undefined;
                        route?: string | undefined;
                        type: string;
                        estimatedArrival?: string | undefined;
                        timeWindow?: {
                            begin?: string | undefined;
                            end?: string | undefined;
                        } | undefined;
                        times?: {
                            setup?: number | undefined;
                            service?: number | undefined;
                            duration?: number | undefined;
                            waiting?: number | undefined;
                            total?: number | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        instructions?: string | undefined;
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
                        phoneNumber?: {
                            countryCode?: number | undefined;
                            nationalNumber?: string | undefined;
                            extension?: string | undefined;
                            italianLeadingZero?: boolean | undefined;
                            rawInput?: string | undefined;
                            countryCodeSource?: number | undefined;
                            preferredDomesticCarrierCode?: string | undefined;
                            hasNumberOfLeadingZeros?: boolean | undefined;
                            numberOfLeadingZeros?: number | undefined;
                        } | undefined;
                        shipment?: string | undefined;
                        shipments?: string[] | undefined;
                        depot?: string | undefined;
                        pickup?: string | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                        id?: string | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
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
                        times?: {
                            setup?: number | undefined;
                            service?: number | undefined;
                            duration?: number | undefined;
                            waiting?: number | undefined;
                            total?: number | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        instructions?: string | undefined;
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
                        phoneNumber?: {
                            countryCode?: number | undefined;
                            nationalNumber?: string | undefined;
                            extension?: string | undefined;
                            italianLeadingZero?: boolean | undefined;
                            rawInput?: string | undefined;
                            countryCodeSource?: number | undefined;
                            preferredDomesticCarrierCode?: string | undefined;
                            hasNumberOfLeadingZeros?: boolean | undefined;
                            numberOfLeadingZeros?: number | undefined;
                        } | undefined;
                        shipment?: string | undefined;
                        shipments?: string[] | undefined;
                        depot?: string | undefined;
                        pickup?: string | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                        id?: string | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
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
                        times?: {
                            setup?: number | undefined;
                            service?: number | undefined;
                            duration?: number | undefined;
                            waiting?: number | undefined;
                            total?: number | undefined;
                        } | undefined;
                        distance?: number | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        instructions?: string | undefined;
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
                        phoneNumber?: {
                            countryCode?: number | undefined;
                            nationalNumber?: string | undefined;
                            extension?: string | undefined;
                            italianLeadingZero?: boolean | undefined;
                            rawInput?: string | undefined;
                            countryCodeSource?: number | undefined;
                            preferredDomesticCarrierCode?: string | undefined;
                            hasNumberOfLeadingZeros?: boolean | undefined;
                            numberOfLeadingZeros?: number | undefined;
                        } | undefined;
                        shipment?: string | undefined;
                        shipments?: string[] | undefined;
                        depot?: string | undefined;
                        pickup?: string | undefined;
                        load?: {
                            packages?: number | undefined;
                            volume?: number | undefined;
                            loadingMeters?: number | undefined;
                            weight?: number | undefined;
                        } | undefined;
                        loadPercentage?: number | undefined;
                        done?: boolean | undefined;
                        position?: number | undefined;
                        activities?: string[] | undefined;
                        id?: string | undefined;
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
    collections: {
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
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
                            } | undefined;
                        }[];
                        "application/vnd.api+json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
                            } | undefined;
                        }[];
                        "text/html": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
                            } | undefined;
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
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
                        };
                        "text/html": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
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
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                    "application/vnd.api+json": {
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                    "text/html": {
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                };
            } | undefined;
            responses: {
                201: {
                    content: {
                        "application/json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
                            } | undefined;
                        };
                        "application/vnd.api+json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
                            } | undefined;
                        };
                        "text/html": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                region?: {
                                    name: string;
                                    id?: string | undefined;
                                } | undefined;
                                description: string;
                            } | undefined;
                            date: string;
                            routeCollectionBulks?: {
                                bulkShipment?: string | undefined;
                                priority?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: string | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: {
                                name: string;
                                id?: string | undefined;
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
        updateById: (id: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    id: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        summary?: Record<string, never> | undefined;
                        computingTimes?: Record<string, never> | undefined;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            routeCollection?: any | undefined;
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                    "application/vnd.api+json": {
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        summary?: Record<string, never> | undefined;
                        computingTimes?: Record<string, never> | undefined;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            routeCollection?: any | undefined;
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                    "text/html": {
                        description?: string | undefined;
                        depot?: string | undefined;
                        date: string;
                        summary?: Record<string, never> | undefined;
                        computingTimes?: Record<string, never> | undefined;
                        routeCollectionBulks?: {
                            bulkShipment?: string | undefined;
                            priority?: string | undefined;
                        }[] | undefined;
                        routeCollectionVehicles?: {
                            routeCollection?: any | undefined;
                            vehicle?: string | undefined;
                            timeWindow?: {
                                begin?: string | undefined;
                                end?: string | undefined;
                            } | undefined;
                            skillShipment?: boolean | undefined;
                            skillPickup?: boolean | undefined;
                        }[] | undefined;
                        taskExclusions?: string[] | undefined;
                        vehicleTypes?: string[] | undefined;
                        requireInbound?: boolean | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
                        };
                        "application/vnd.api+json": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
                        };
                        "text/html": {
                            status?: string | undefined;
                            description?: string | undefined;
                            depot?: {
                                description: string;
                            } | undefined;
                            date: string;
                            unassigned?: string[] | undefined;
                            routes?: {
                                sequence?: number | undefined;
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                driver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                coDriver?: {
                                    name?: string | undefined;
                                    phoneNumber: Record<string, never>;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                summary?: {
                                    cost?: number | undefined;
                                    pickup?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    delivery?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    loadPercentage?: number | undefined;
                                    times?: {
                                        setup?: number | undefined;
                                        service?: number | undefined;
                                        duration?: number | undefined;
                                        waiting?: number | undefined;
                                        total?: number | undefined;
                                    } | undefined;
                                    distance?: number | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                geometry?: string | undefined;
                                syncedAt?: string | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            summary?: {
                                cost?: number | undefined;
                                pickup?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                delivery?: {
                                    packages?: number | undefined;
                                    volume?: number | undefined;
                                    loadingMeters?: number | undefined;
                                    weight?: number | undefined;
                                } | undefined;
                                loadPercentage?: number | undefined;
                                times?: {
                                    setup?: number | undefined;
                                    service?: number | undefined;
                                    duration?: number | undefined;
                                    waiting?: number | undefined;
                                    total?: number | undefined;
                                } | undefined;
                                distance?: number | undefined;
                            } | undefined;
                            computingTimes?: {
                                loading?: number | undefined;
                                solving?: number | undefined;
                                routing?: number | undefined;
                            } | undefined;
                            routeCollectionBulks?: {
                                bulkShipment?: {
                                    relation?: {
                                        name: string;
                                        number?: string | undefined;
                                    } | undefined;
                                    reference?: string | undefined;
                                    id?: string | undefined;
                                } | undefined;
                                priority?: string | undefined;
                                id?: string | undefined;
                            }[] | undefined;
                            routeCollectionVehicles?: {
                                vehicle?: {
                                    depot?: {
                                        description: string;
                                    } | undefined;
                                    type?: string | undefined;
                                    description?: string | undefined;
                                    licensePlate?: string | undefined;
                                    phoneNumber?: Record<string, never> | undefined;
                                    capacity?: {
                                        packages?: number | undefined;
                                        volume?: number | undefined;
                                        loadingMeters?: number | undefined;
                                        weight?: number | undefined;
                                    } | undefined;
                                    color?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: string | undefined;
                                    updatedAt?: string | undefined;
                                } | undefined;
                                timeWindow?: {
                                    begin?: string | undefined;
                                    end?: string | undefined;
                                } | undefined;
                                skillShipment?: boolean | undefined;
                                skillPickup?: boolean | undefined;
                                id?: string | undefined;
                                createdAt?: string | undefined;
                                updatedAt?: string | undefined;
                            }[] | undefined;
                            taskExclusions?: string[] | undefined;
                            vehicleTypes?: string[] | undefined;
                            error?: string | undefined;
                            requireInbound?: boolean | undefined;
                            id?: string | undefined;
                            createdAt?: string | undefined;
                            updatedAt?: string | undefined;
                            region?: string | undefined;
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
