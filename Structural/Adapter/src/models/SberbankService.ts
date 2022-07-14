export interface ISberbankService {
    value: string
    user: string
    accessToken: string
    processPayment: () => void
}

export class SberbankService implements ISberbankService {
    value: string
    user: string
    accessToken: string

    constructor(value: string, user: string, accessToken: string) {
        this.value = value
        this.user = user
        this.accessToken = accessToken
    }

    processPayment() {
        console.log('Processing payment via Sberbank\nInfo:')
        console.log('Value: ' + this.value)
        console.log('User: ' + this.user)
        console.log('AccessToken: ' + this.accessToken)
    }


}