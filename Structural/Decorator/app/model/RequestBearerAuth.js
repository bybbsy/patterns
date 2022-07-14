"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBearerAuth = void 0;
const RequestDecorator_1 = require("./RequestDecorator");
class RequestBearerAuth extends RequestDecorator_1.RequestDecorator {
    constructor(request) {
        super(request);
    }
    send(url) {
        const bearerAuth = 'Bearer 12345';
        this.request.headers.Authorization = bearerAuth;
        super.send(url);
    }
}
exports.RequestBearerAuth = RequestBearerAuth;
