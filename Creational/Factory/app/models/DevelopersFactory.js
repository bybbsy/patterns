"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersFactory = void 0;
const BackendDeveloper_1 = require("./BackendDeveloper");
const FrontendDeveloper_1 = require("./FrontendDeveloper");
const UnityDeveloper_1 = require("./UnityDeveloper");
class DevelopersFactory {
    createDeveloperAccount(name, devType) {
        if (devType === 'frontend') {
            return new FrontendDeveloper_1.FrontendDeveloper(name);
        }
        if (devType === 'backend') {
            return new BackendDeveloper_1.BackendDeveloper(name);
        }
        if (devType === 'unity') {
            return new UnityDeveloper_1.UnityDeveloper(name);
        }
        return null;
    }
}
exports.DevelopersFactory = DevelopersFactory;
