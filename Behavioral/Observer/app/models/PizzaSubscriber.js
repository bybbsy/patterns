"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaSubscriber = void 0;
const Publisher_1 = require("./Publisher");
class PizzaSubscriber {
    constructor(name) {
        this.name = name;
    }
    update(publisher) {
        if (publisher instanceof Publisher_1.Publisher && publisher.mainState.items.includes('pizza')) {
            console.log(`${this.name} successfully reacted adding pizza in store: ${publisher.mainState.items}`);
        }
    }
}
exports.PizzaSubscriber = PizzaSubscriber;
