"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityDeveloper = void 0;
const app_1 = require("../app");
class UnityDeveloper {
    constructor(name) {
        this.name = name;
    }
    createAccount() {
        app_1.usersDB.gamedev.unity.push(this);
    }
}
exports.UnityDeveloper = UnityDeveloper;
