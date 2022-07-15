import { AbstractEmployeeService } from "./AbstractEmployeeService";
import { NYFrontendDeveloper } from "./NewYorkEmployee/NYFrontendDeveloper";

export class NYEmployeesService implements AbstractEmployeeService {
    public hireFrontend() {
        return new NYFrontendDeveloper('Marcus', '400$')
    }
}