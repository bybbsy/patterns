import { PaymentAdapterService } from "./models/PaymentAdapter";
import { PaymentService } from "./models/PaymentService";
import { SberbankService } from "./models/SberbankService";

const paymentService = new PaymentService(100, '$')
const sberbankService = new SberbankService('100 $', 'Jeff', 'Bearer 12345')


const paymentServiceAdapter = new PaymentAdapterService(sberbankService)

paymentServiceAdapter.submitPayment()