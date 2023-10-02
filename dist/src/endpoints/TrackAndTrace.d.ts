import { BaseEndpoint } from "./Base";
export declare class TrackAndTrace extends BaseEndpoint {
    getById(id: any, query: any): Promise<import("openapi-fetch").FetchResponse<{
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
        };
    }>>;
}
