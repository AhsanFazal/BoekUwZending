import { BaseEndpoint } from "./Base";
export declare class LabelEndpoint extends BaseEndpoint {
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
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        status?: string | undefined;
                        id?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        status?: string | undefined;
                        id?: string | undefined;
                    };
                    "text/html": {
                        waybill?: string | undefined;
                        reference?: string | undefined;
                        status?: string | undefined;
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
