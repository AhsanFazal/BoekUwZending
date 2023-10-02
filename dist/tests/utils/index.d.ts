import { paths } from "../../src/lib/api";
type FilterKeys<Obj, Matchers> = {
    [K in keyof Obj]: K extends Matchers ? Obj[K] : never;
}[keyof Obj];
type PathResponses<T> = T extends {
    responses: any;
} ? T["responses"] : unknown;
type OperationContent<T> = T extends {
    content: any;
} ? T["content"] : unknown;
type MediaType = `${string}/${string}`;
type MockedResponse<T, Status extends keyof T = keyof T> = FilterKeys<OperationContent<T[Status]>, MediaType> extends never ? {
    status: Status;
    body?: never;
} : {
    status: Status;
    body: FilterKeys<OperationContent<T[Status]>, MediaType>;
};
/**
 * Mock fetch() calls and type against OpenAPI schema
 */
export declare function mockResponses(responses: {
    [Path in keyof Partial<paths>]: {
        [Method in keyof Partial<paths[Path]>]: MockedResponse<PathResponses<paths[Path][Method]>>;
    };
}): void;
export declare function findPath(actual: string, testPaths: string[]): string | undefined;
export {};
