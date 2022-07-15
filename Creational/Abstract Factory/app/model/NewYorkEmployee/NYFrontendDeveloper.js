"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NYFrontendDeveloper = void 0;
const AbstractEmployee_1 = require("../AbstractEmployee");
class NYFrontendDeveloper extends AbstractEmployee_1.AbstractEmployee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    getProfileInfo() {
        return this.name + " and salary: " + this.salary;
    }
}
exports.NYFrontendDeveloper = NYFrontendDeveloper;
