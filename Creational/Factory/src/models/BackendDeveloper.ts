import { usersDB } from "../app";
import { IDeveloper } from "./DevelopersFactory";

export class BackendDeveloper implements IDeveloper {
    name: string

    constructor(name: string) {
        this.name = name
    }

    createAccount() {
        usersDB.backend.push(this)
    }
}