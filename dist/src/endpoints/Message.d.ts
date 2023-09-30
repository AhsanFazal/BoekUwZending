import { components } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class MessageEndpoint extends BaseEndpoint {
    create(body: components["schemas"]["Message-message-write"]): Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    conversation?: string | undefined;
                    internal?: boolean | undefined;
                    text: string;
                };
                "application/vnd.api+json": {
                    conversation?: string | undefined;
                    internal?: boolean | undefined;
                    text: string;
                };
                "text/html": {
                    conversation?: string | undefined;
                    internal?: boolean | undefined;
                    text: string;
                };
            };
        } | undefined;
        responses: {
            201: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
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
    getById(id: string): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
    updateById(id: string, body: components["schemas"]["Message-message-write"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        requestBody?: {
            content: {
                "application/merge-patch+json": {
                    text: string;
                };
                "application/vnd.api+json": {
                    text: string;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                    "application/vnd.api+json": Record<string, never>;
                    "text/html": Record<string, never>;
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
}
