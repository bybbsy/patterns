export type RequestMethods = 'POST' | 'GET'

export interface IRequestHeaders {
    Accept?: string,
    Authorization?: string
}

export interface IRequest {
    method: RequestMethods
    headers: IRequestHeaders

    send: (url: string) => void
}

export class Request implements IRequest {
    method: RequestMethods
    headers: IRequestHeaders = {}
    
    constructor(method: RequestMethods) {
        this.method = method
        this.headers.Accept = 'application/json'
    }

    send(url: string) {
        console.log(`[${this.method}] request to ${url}\nHeaders:`)
        for(let header in this.headers) {
            console.log(`${header}: ${this.headers[header as keyof IRequestHeaders]}`)
        }
    }
}