"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("./model/Request");
const RequestBearerAuth_1 = require("./model/RequestBearerAuth");
let req = new Request_1.Request('GET');
req.send('yandex');
req = new RequestBearerAuth_1.RequestBearerAuth(new Request_1.Request('POST'));
req.send('youtube');
