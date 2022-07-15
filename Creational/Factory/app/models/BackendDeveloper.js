"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendDeveloper = void 0;
const app_1 = require("../app");
class BackendDeveloper {
    constructor(name) {
        this.name = name;
    }
    createAccount() {
        app_1.usersDB.backend.push(this);
    }
}
exports.BackendDeveloper = BackendDeveloper;
