import { BaseEndpoint } from "./Base";
export declare class Type extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                "shipmentItem.shipment.id"?: unknown;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        lines?: {
                            dateTime?: string | undefined;
                            distributorDescription?: string | undefined;
                            distributorLocation?: string | undefined;
                            status?: string | undefined;
                        }[] | undefined;
                        label?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        lines?: {
                            dateTime?: string | undefined;
                            distributorDescription?: string | undefined;
                            distributorLocation?: string | undefined;
                            status?: string | undefined;
                        }[] | undefined;
                        label?: string | undefined;
                        id?: string | undefined;
                    }[];
                    "text/html": {
                        lines?: {
                            dateTime?: string | undefined;
                            distributorDescription?: string | undefined;
                            distributorLocation?: string | undefined;
                            status?: string | undefined;
                        }[] | undefined;
                        label?: string | undefined;
                        id?: string | undefined;
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
                        description: string;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        description: string;
                        id?: string | undefined;
                    };
                    "text/html": {
                        description: string;
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
