"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrankfurtEmployeesService_1 = require("./model/FrankfurtEmployeesService");
const NYEmployeesService_1 = require("./model/NYEmployeesService");
let nyEmployeeService = new NYEmployeesService_1.NYEmployeesService();
let nyFrontend = nyEmployeeService.hireFrontend();
console.log(nyFrontend.getProfileInfo());
let frankfurtEmployeeService = new FrankfurtEmployeesService_1.FrankfrutEmployeesService();
let frankfurtFrontend = frankfurtEmployeeService.hireFrontend();
console.log(frankfurtFrontend.getProfileInfo());
