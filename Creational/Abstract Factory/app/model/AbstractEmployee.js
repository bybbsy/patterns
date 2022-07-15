"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEmployee = void 0;
class AbstractEmployee {
    constructor(name, salary) { this.name = name, this.salary = salary; }
    getProfileInfo() {
        return 'Profile info: ' + this.name + '\nSalaery: ' + this.salary;
    }
}
exports.AbstractEmployee = AbstractEmployee;
