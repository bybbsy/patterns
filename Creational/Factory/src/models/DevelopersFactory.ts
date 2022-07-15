import { BackendDeveloper } from "./BackendDeveloper"
import { FrontendDeveloper } from "./FrontendDeveloper"
import { UnityDeveloper } from "./UnityDeveloper"

export interface IDeveloper {
    name: string
    createAccount: () => void
}

export type devTypes = 'frontend' | 'backend' | 'unity'

export class DevelopersFactory {
    createDeveloperAccount(name: string, devType: devTypes): IDeveloper | null {
        if(devType === 'frontend') {
            return new FrontendDeveloper(name)
        }

        if(devType === 'backend') {
            return new BackendDeveloper(name)
        }

        if(devType === 'unity') {
            return new UnityDeveloper(name)
        }

        return null
    }
}