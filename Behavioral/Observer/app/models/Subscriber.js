"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const Publisher_1 = require("./Publisher");
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(publisher) {
        if (publisher instanceof Publisher_1.Publisher) {
            console.log(`${this.name} successfully reacted to any state change: ${publisher.mainState.items}`);
        }
    }
}
exports.Subscriber = Subscriber;
