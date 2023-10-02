import { BaseEndpoint } from "./Base";
export declare class Conversation extends BaseEndpoint {
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
                        shipment?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        shipmentQuotation?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        shipment?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        shipmentQuotation?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    }[];
                    "text/html": {
                        shipment?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        shipmentQuotation?: {
                            id?: string | undefined;
                            sequence?: string | undefined;
                        } | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
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
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    };
                    "text/html": {
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    post(body: any): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    relation?: string | undefined;
                    shipment?: string | undefined;
                    shipmentQuotation?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
                "application/vnd.api+json": {
                    relation?: string | undefined;
                    shipment?: string | undefined;
                    shipmentQuotation?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
                "text/html": {
                    relation?: string | undefined;
                    shipment?: string | undefined;
                    shipmentQuotation?: string | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": {
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
                    };
                    "text/html": {
                        shipment?: string | undefined;
                        shipmentQuotation?: string | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        subject?: string | undefined;
                        subjectType?: string | undefined;
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
    getMessages(id: any): Promise<import("openapi-fetch").FetchResponse<{
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
                        user?: string | undefined;
                        employee?: string | undefined;
                        conversation?: string | undefined;
                        internal?: boolean | undefined;
                        text: string;
                        readByUser?: boolean | undefined;
                        readByEmployee?: boolean | undefined;
                        notificationSent?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        excerpt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        user?: string | undefined;
                        employee?: string | undefined;
                        conversation?: string | undefined;
                        internal?: boolean | undefined;
                        text: string;
                        readByUser?: boolean | undefined;
                        readByEmployee?: boolean | undefined;
                        notificationSent?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        excerpt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
                        idAsString?: string | undefined;
                        idAsBytes?: string | undefined;
                        idAsHex?: string | undefined;
                        idAsDatabaseValue?: string | undefined;
                    }[];
                    "text/html": {
                        user?: string | undefined;
                        employee?: string | undefined;
                        conversation?: string | undefined;
                        internal?: boolean | undefined;
                        text: string;
                        readByUser?: boolean | undefined;
                        readByEmployee?: boolean | undefined;
                        notificationSent?: boolean | undefined;
                        id?: string | undefined;
                        createdAt?: string | undefined;
                        updatedAt?: string | undefined;
                        excerpt?: string | undefined;
                        relationPaths?: readonly string[] | undefined;
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
}
