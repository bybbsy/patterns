import { IRequest, IRequestHeaders, RequestMethods } from "./Request"

export class RequestDecorator implements IRequest {
    request: IRequest
    method: RequestMethods
    headers: IRequestHeaders
    

    constructor(request: IRequest)  {
        this.request = request
        this.method = request.method
        this.headers = request.headers
    }

    send(url: string): void {
        this.request.send(url)
    }
}
