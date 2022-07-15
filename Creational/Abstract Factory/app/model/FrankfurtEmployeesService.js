"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrankfrutEmployeesService = void 0;
const FrankfurtFrontendDeveloper_1 = require("./FrankfurtEmployee/FrankfurtFrontendDeveloper");
class FrankfrutEmployeesService {
    hireFrontend() {
        return new FrankfurtFrontendDeveloper_1.FrankfurtFrontendDeveloper('Paul Jürgen', '1000 €');
    }
}
exports.FrankfrutEmployeesService = FrankfrutEmployeesService;
