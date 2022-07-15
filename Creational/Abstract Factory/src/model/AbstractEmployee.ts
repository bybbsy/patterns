export abstract class AbstractEmployee {
    public name: string
    public salary: string

    constructor(name: string, salary: string) { this.name = name, this.salary = salary }

    getProfileInfo() {
        return 'Profile info: ' + this.name + '\nSalaery: ' + this.salary
    }
}