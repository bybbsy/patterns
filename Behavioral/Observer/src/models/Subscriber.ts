import { IPublisher, Publisher } from "./Publisher"

export interface ISubscriber {
  name: string
  update: (publisher: IPublisher) => void
}

export class Subscriber implements ISubscriber {
  name: string

  constructor(name: string) {
    this.name = name
  }

  update(publisher: IPublisher) {
    if(publisher instanceof Publisher) {
      console.log(`${this.name} successfully reacted to any state change: ${publisher.mainState.items}`)
    }
  }
}