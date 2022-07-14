"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    constructor(method) {
        this.headers = {};
        this.method = method;
        this.headers.Accept = 'application/json';
    }
    send(url) {
        console.log(`[${this.method}] request to ${url}\nHeaders:`);
        for (let header in this.headers) {
            console.log(`${header}: ${this.headers[header]}`);
        }
    }
}
exports.Request = Request;
