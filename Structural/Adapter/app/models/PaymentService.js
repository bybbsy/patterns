"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    submitPayment() {
        console.log('Submitting payment via default Bank');
    }
    getOperationsHistory() {
        return ['withdrawal', 'transaction'];
    }
}
exports.PaymentService = PaymentService;
