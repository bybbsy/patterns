import { AbstractEmployee } from "../AbstractEmployee";

export class FrankfurtFrontendDeveloper extends AbstractEmployee {
    name: string
    salary: string

    constructor(name: string, salary: string) {
        super(name, salary)
        this.name = name

        this.salary = salary
    }

    getProfileInfo(): string {
        return this.name + " and salary: " + this.salary
    }
}