"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersDB = void 0;
const DevelopersFactory_1 = require("./models/DevelopersFactory");
exports.usersDB = {
    frontend: [],
    backend: [],
    gamedev: {
        unity: []
    }
};
const developersFactory = new DevelopersFactory_1.DevelopersFactory();
const frontendDeveloper = developersFactory.createDeveloperAccount('Jeff', 'frontend');
frontendDeveloper === null || frontendDeveloper === void 0 ? void 0 : frontendDeveloper.createAccount();
const backendDeveloper = developersFactory.createDeveloperAccount('Backend Developer Marcus', 'backend');
backendDeveloper === null || backendDeveloper === void 0 ? void 0 : backendDeveloper.createAccount();
const unityDeveloper = developersFactory.createDeveloperAccount('Unity Developer Muhha', 'unity');
unityDeveloper === null || unityDeveloper === void 0 ? void 0 : unityDeveloper.createAccount();
console.log(exports.usersDB);
