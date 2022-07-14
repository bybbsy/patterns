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
}
exports.PaymentAdapterService = PaymentAdapterService;
