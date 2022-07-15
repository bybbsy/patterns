import { AbstractEmployee } from "./AbstractEmployee";

export interface AbstractEmployeeService {
    hireFrontend: () => AbstractEmployee

    // hireBackend: () => AbstractEmployee
}