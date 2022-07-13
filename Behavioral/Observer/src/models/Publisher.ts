import { ISubscriber } from "./Subscriber"

export interface IPublisher {
  mainState: any
  subscribers: ISubscriber[]
  addSubscriber: (subscriber: ISubscriber) => void
  removeSubscriber: (subscriber: ISubscriber) => void
  notifySubscribers: () => void
}

const warehouse = [ 'bread', 'butter', 'pizza' ]

export class Publisher implements IPublisher {
  mainState: { items: string[] }

  subscribers: ISubscriber[]

  constructor() {
    this.mainState = {
      items: [ 'milk', 'water', 'cheeseburger' ]
    }
    this.subscribers = []
  }

  addSubscriber(subscriber: ISubscriber) {
    const subscribed = this.subscribers.includes(subscriber)

    // const subscribed = false
    if (subscribed) {
      return console.log('Already subscribed!')
    }

    console.log(`Subscribed: ${subscriber.name}`)
    this.subscribers.push(subscriber)
  }

  removeSubscriber(subscriber: ISubscriber) {
    const withoutSubscriber = this.subscribers.filter(s => s.name !== subscriber.name)
    if (this.subscribers.length > withoutSubscriber.length) {
      this.subscribers = withoutSubscriber
      return console.log(`Unsubscribed: ${subscriber.name}`)
    }

    console.log('Cant unsubscribe!')
  }

  notifySubscribers() {
    console.log('Notifying!')
    this.subscribers.forEach(s => s.update(this))
  }

  someActions() {
    const randomItem = Math.floor((Math.random() * (this.mainState.items.length)))

    this.mainState.items.push(warehouse[randomItem])

    this.notifySubscribers()
  }
}
