import { usersDB } from "../app";
import { IDeveloper } from "./DevelopersFactory";

export class UnityDeveloper implements IDeveloper {
    name: string

    constructor(name: string) {
        this.name = name
    }

    createAccount() {
        usersDB.gamedev.unity.push(this)
    }
}