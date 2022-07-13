"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
const warehouse = ['bread', 'butter', 'pizza'];
class Publisher {
    constructor() {
        this.mainState = {
            items: ['milk', 'water', 'cheeseburger']
        };
        this.subscribers = [];
    }
    addSubscriber(subscriber) {
        const subscribed = this.subscribers.includes(subscriber);
        // const subscribed = false
        if (subscribed) {
            return console.log('Already subscribed!');
        }
        console.log(`Subscribed: ${subscriber.name}`);
        this.subscribers.push(subscriber);
    }
    removeSubscriber(subscriber) {
        const withoutSubscriber = this.subscribers.filter(s => s.name !== subscriber.name);
        if (this.subscribers.length > withoutSubscriber.length) {
            this.subscribers = withoutSubscriber;
            return console.log(`Unsubscribed: ${subscriber.name}`);
        }
        console.log('Cant unsubscribe!');
    }
    notifySubscribers() {
        console.log('Notifying!');
        this.subscribers.forEach(s => s.update(this));
    }
    someActions() {
        const randomItem = Math.floor((Math.random() * (this.mainState.items.length)));
        this.mainState.items.push(warehouse[randomItem]);
        this.notifySubscribers();
    }
}
exports.Publisher = Publisher;
