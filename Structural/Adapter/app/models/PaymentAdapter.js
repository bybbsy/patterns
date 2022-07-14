"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdapterService = void 0;
class PaymentAdapterService {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    submitPayment() {
        this.adaptee.processPayment();
    }
    getOperationsHistory() {
        const history = [
            ...this.adaptee.historyOfWithdrawals(),
            ...this.adaptee.historyOfPayments()
        ];
        return history;
    }
}
exports.PaymentAdapterService = PaymentAdapterService;
