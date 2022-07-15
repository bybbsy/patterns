"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NYEmployeesService = void 0;
const NYFrontendDeveloper_1 = require("./NewYorkEmployee/NYFrontendDeveloper");
class NYEmployeesService {
    hireFrontend() {
        return new NYFrontendDeveloper_1.NYFrontendDeveloper('Marcus', '400$');
    }
}
exports.NYEmployeesService = NYEmployeesService;
