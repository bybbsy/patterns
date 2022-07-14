"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentAdapter_1 = require("./models/PaymentAdapter");
const PaymentService_1 = require("./models/PaymentService");
const SberbankService_1 = require("./models/SberbankService");
const paymentService = new PaymentService_1.PaymentService(100, '$');
const sberbankService = new SberbankService_1.SberbankService('100 $', 'Jeff', 'Bearer 12345');
const paymentServiceAdapter = new PaymentAdapter_1.PaymentAdapterService(sberbankService);
paymentServiceAdapter.submitPayment();
