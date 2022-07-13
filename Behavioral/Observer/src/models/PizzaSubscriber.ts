import { IPublisher, Publisher } from "./Publisher"
import { ISubscriber } from "./Subscriber"

export class PizzaSubscriber implements ISubscriber {
    name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    update(publisher: IPublisher) {
      if(publisher instanceof Publisher && publisher.mainState.items.includes('pizza')) {
        console.log(`${this.name} successfully reacted adding pizza in store: ${publisher.mainState.items}`)
      }
    }
  }