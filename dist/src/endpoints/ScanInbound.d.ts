import { BaseEndpoint } from "./Base";
export declare class ScanInbound extends BaseEndpoint {
    create(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    depot: string;
                    dimensions?: {
                        length?: number | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                    weight?: number | undefined;
                    data: string;
                };
                "application/vnd.api+json": {
                    depot: string;
                    dimensions?: {
                        length?: number | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                    weight?: number | undefined;
                    data: string;
                };
                "text/html": {
                    depot: string;
                    dimensions?: {
                        length?: number | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                    weight?: number | undefined;
                    data: string;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
                    };
                    "text/html": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
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
    getByUUID(uuid: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                uuid: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
                    };
                    "text/html": {
                        depot: string;
                        dimensions?: {
                            length?: number | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                        weight?: number | undefined;
                        id?: string | undefined;
                        label?: {
                            shipment?: {
                                salesRate?: {
                                    service?: {
                                        distributor: {
                                            name: string;
                                            code: string;
                                        };
                                        name?: string | undefined;
                                    } | undefined;
                                } | undefined;
                                sequence?: string | undefined;
                                shipTo?: {
                                    address?: {
                                        postcode?: string | undefined;
                                        city?: string | undefined;
                                        country?: string | undefined;
                                    } | undefined;
                                } | undefined;
                            } | undefined;
                            waybill?: string | undefined;
                            shipmentItem?: {
                                dimensions?: {
                                    length?: number | undefined;
                                    width?: number | undefined;
                                    height?: number | undefined;
                                } | undefined;
                                weight?: string | undefined;
                            } | undefined;
                        } | undefined;
                        datetime?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
