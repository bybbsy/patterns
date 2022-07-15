import { DevelopersFactory, IDeveloper } from "./models/DevelopersFactory";

export interface IUsersDB {
    frontend: IDeveloper[]
    backend: IDeveloper[]
    gamedev: {
        unity: IDeveloper[]
    }
}

export const usersDB: IUsersDB = {
    frontend: [],
    backend: [],
    gamedev: {
        unity: []
    }
}

const developersFactory = new DevelopersFactory()

const frontendDeveloper = developersFactory.createDeveloperAccount('Jeff', 'frontend')
frontendDeveloper?.createAccount()

const backendDeveloper = developersFactory.createDeveloperAccount('Backend Developer Marcus', 'backend')
backendDeveloper?.createAccount()

const unityDeveloper = developersFactory.createDeveloperAccount('Unity Developer Muhha', 'unity')
unityDeveloper?.createAccount()

console.log(usersDB)