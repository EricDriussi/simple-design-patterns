import { Bartender, Cheff, Order, Waiter } from "./pattern_implementation";

const cheff = new Cheff();
const foodOrder = new Order(cheff, "Pizza");

const bartender = new Bartender();
const drinkOrder = new Order(bartender, "Irish Coffee");

const waiter = new Waiter();
waiter.placeOrder(foodOrder);
waiter.placeOrder(drinkOrder);
