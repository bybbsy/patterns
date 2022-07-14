import { IPaymentService, PaymentService } from "./PaymentService";
import { ISberbankService, SberbankService } from "./SberbankService";

export interface IPaymentAdapter {
    submitPayment: () => void
}

export class PaymentAdapterService implements IPaymentAdapter {
    adaptee: ISberbankService

    constructor(adaptee: ISberbankService) {
        this.adaptee = adaptee
    }

    submitPayment(): void {
        this.adaptee.processPayment()
    }
}