import { operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class BuzzieEndpoint extends BaseEndpoint {
    get(query: operations["buzzie-postcodesPostcodeCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _global_search?: string | undefined;
                "_global_search.properties"?: string | undefined;
                "_order[postcode]"?: string | undefined;
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        postcode: number;
                    }[];
                    "text/csv": {
                        postcode: number;
                    }[];
                };
            };
        };
    }>>;
}
