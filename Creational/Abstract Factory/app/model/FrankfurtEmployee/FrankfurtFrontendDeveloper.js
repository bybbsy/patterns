"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrankfurtFrontendDeveloper = void 0;
const AbstractEmployee_1 = require("../AbstractEmployee");
class FrankfurtFrontendDeveloper extends AbstractEmployee_1.AbstractEmployee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    getProfileInfo() {
        return this.name + " and salary: " + this.salary;
    }
}
exports.FrankfurtFrontendDeveloper = FrankfurtFrontendDeveloper;
