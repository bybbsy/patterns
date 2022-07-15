"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendDeveloper = void 0;
const app_1 = require("../app");
class FrontendDeveloper {
    constructor(name) {
        this.name = name;
    }
    createAccount() {
        console.log('assdas');
        app_1.usersDB.frontend.push(this);
    }
}
exports.FrontendDeveloper = FrontendDeveloper;
