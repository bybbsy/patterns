import { Publisher } from "./models/Publisher";
import { Subscriber } from "./models/Subscriber";
import { PizzaSubscriber } from "./models/PizzaSubscriber";

const publisher = new Publisher()

const subscriberJeff = new Subscriber('Jeff')
publisher.addSubscriber(subscriberJeff)

const subscriberMartin = new PizzaSubscriber('Martin')
publisher.addSubscriber(subscriberMartin)

const subscriberJinn = new Subscriber('Jinn')

publisher.addSubscriber(subscriberJinn)

publisher.someActions()

const subscriberCole = new PizzaSubscriber('Cole')
publisher.addSubscriber(subscriberCole)

publisher.removeSubscriber(subscriberJeff)

setTimeout(() => publisher.someActions(), 2000)