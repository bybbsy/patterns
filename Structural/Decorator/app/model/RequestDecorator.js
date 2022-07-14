"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDecorator = void 0;
class RequestDecorator {
    constructor(request) {
        this.request = request;
        this.method = request.method;
        this.headers = request.headers;
    }
    send(url) {
        this.request.send(url);
    }
}
exports.RequestDecorator = RequestDecorator;
