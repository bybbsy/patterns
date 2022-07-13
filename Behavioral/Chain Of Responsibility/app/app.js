"use strict";
class BaseHandler {
    constructor() {
        this.next = null;
    }
    setNext(handler) {
        this.next = handler;
        return handler;
    }
    handle(request) {
        // ???
        if (this.next) {
            return this.next.handle(request);
        }
        throw Error('Doesnt match');
    }
}
class ChechXAuthTokenHandler extends BaseHandler {
    // constructor() {
    //   super()
    // }
    handle(request) {
        if (request.split(' ')[0] === 'Bearer') {
            return `It contains X-Auth-Token: ${request}`;
        }
        return super.handle(request);
    }
}
const db = ['Jeff'];
class CheckUserInDbHandler extends BaseHandler {
    // constructor() {
    //   super()
    // }
    handle(request) {
        if (db.includes(request)) {
            return `Db contains user: ${request}`;
        }
        return super.handle(request);
    }
}
function client() {
    try {
        const xAuthHandler = new ChechXAuthTokenHandler();
        const userInDbHandler = new CheckUserInDbHandler();
        xAuthHandler.setNext(userInDbHandler);
        const values = [
            'Beareq 12314',
            'Jeff'
        ];
        for (let val of values) {
            const res = xAuthHandler.handle(val);
            if (res) {
                console.log(res);
            }
            else {
                console.log('Have not results');
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}
client();
