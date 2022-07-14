import { IPaymentService } from "./PaymentService";
import { ISberbankService } from "./SberbankService";

export class PaymentAdapterService implements IPaymentService {
    adaptee: ISberbankService

    constructor(adaptee: ISberbankService) {
        this.adaptee = adaptee
    }

    submitPayment(): void {
        this.adaptee.processPayment()
    }

    getOperationsHistory() {
        const history: string[] = [
            ...this.adaptee.historyOfWithdrawals(),
            ...this.adaptee.historyOfPayments()
        ]

        return history
    }
}