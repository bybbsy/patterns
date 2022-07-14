import { IRequest } from "./Request"
import { RequestDecorator } from "./RequestDecorator"

export class RequestBearerAuth extends RequestDecorator {

    constructor(request: IRequest) {
        super(request)
    }

    send(url: string): void {
        const bearerAuth = 'Bearer 12345'
        this.request.headers.Authorization = bearerAuth
        super.send(url)
    }
}