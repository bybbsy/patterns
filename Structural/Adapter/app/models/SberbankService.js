"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SberbankService = void 0;
class SberbankService {
    constructor(value, user, accessToken) {
        this.value = value;
        this.user = user;
        this.accessToken = accessToken;
    }
    processPayment() {
        console.log('Processing payment via Sberbank\nInfo:');
        console.log('Value: ' + this.value);
        console.log('User: ' + this.user);
        console.log('AccessToken: ' + this.accessToken);
    }
    historyOfPayments() {
        return ['Car Tax: 500$', 'Pizza Hut: 200$'];
    }
    historyOfWithdrawals() {
        return ['200$', '5$'];
    }
}
exports.SberbankService = SberbankService;
