import { FrankfrutEmployeesService } from "./model/FrankfurtEmployeesService";
import { NYEmployeesService } from "./model/NYEmployeesService";

let nyEmployeeService = new NYEmployeesService();

let nyFrontend = nyEmployeeService.hireFrontend()

console.log(nyFrontend.getProfileInfo())

let frankfurtEmployeeService = new FrankfrutEmployeesService()

let frankfurtFrontend = frankfurtEmployeeService.hireFrontend()

console.log(frankfurtFrontend.getProfileInfo())