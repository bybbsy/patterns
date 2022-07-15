import { AbstractEmployeeService } from "./AbstractEmployeeService";
import { FrankfurtFrontendDeveloper } from "./FrankfurtEmployee/FrankfurtFrontendDeveloper";

export class FrankfrutEmployeesService implements AbstractEmployeeService {
    public hireFrontend() {
        return new FrankfurtFrontendDeveloper('Paul Jürgen', '1000 €')
    }
}