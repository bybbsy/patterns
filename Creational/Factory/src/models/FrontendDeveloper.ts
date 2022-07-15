import { usersDB } from "../app";
import { IDeveloper } from "./DevelopersFactory";

export class FrontendDeveloper implements IDeveloper {
    name: string

    constructor(name: string) {
        this.name = name
    }

    createAccount() {
        console.log('assdas')
        usersDB.frontend.push(this)
    }
}