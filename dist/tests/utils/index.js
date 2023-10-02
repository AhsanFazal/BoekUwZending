"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPath = exports.mockResponses = void 0;
// Settings
// ⚠️ Important: change this! This prefixes all URLs
const BASE_URL = "https://api.boekuwzending.com";
/**
 * Mock fetch() calls and type against OpenAPI schema
 */
function mockResponses(responses) {
    fetchMock.mockResponse(req => {
        const mockedPath = findPath(req.url.replace(BASE_URL, ""), Object.keys(responses));
        // note: we get lazy with the types here, because the inference is bad anyway and this has a `void` return signature. The important bit is the parameter signature.
        if (!mockedPath || (!responses)[mockedPath])
            throw new Error(`No mocked response for ${req.url}`); // throw error if response not mocked (remove or modify if you’d like different behavior)
        const method = req.method.toLowerCase();
        if (!responses[mockedPath][method])
            throw new Error(`${req.method} called but not mocked on ${mockedPath}`); // likewise throw error if other parts of response aren’t mocked
        if (!responses[mockedPath][method]) {
            throw new Error(`${req.method} called but not mocked on ${mockedPath}`);
        }
        const { status, body } = responses[mockedPath][method];
        return { status, body: JSON.stringify(body) };
    });
}
exports.mockResponses = mockResponses;
// helper function that matches a realistic URL (/users/123) to an OpenAPI path (/users/{user_id}
function findPath(actual, testPaths) {
    const url = new URL(actual, actual.startsWith("http") ? undefined : "http://testapi.com");
    const actualParts = url.pathname.split("/");
    for (const p of testPaths) {
        let matched = true;
        const testParts = p.split("/");
        if (actualParts.length !== testParts.length)
            continue; // automatically not a match if lengths differ
        for (let i = 0; i < testParts.length; i++) {
            if (testParts[i].startsWith("{"))
                continue; // path params ({user_id}) always count as a match
            if (actualParts[i] !== testParts[i]) {
                matched = false;
                break;
            }
        }
        if (matched)
            return p;
    }
}
exports.findPath = findPath;
