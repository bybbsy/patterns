export interface IPaymentService {
    amount: number,
    currency: string,
    submitPayment: () => void
    getOperationsHistory: () => string[]
}

export class PaymentService implements IPaymentService {
    amount: number
    currency: string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    submitPayment() {
        console.log('Submitting payment via default Bank')
    }

    getOperationsHistory() {
        return ['withdrawal', 'transaction']
    }
}