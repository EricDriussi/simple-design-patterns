import { Barista, CateringService, Cheff, Courier, Waiter } from "./implementation";

// Without Facade
const cheff = new Cheff();
const waiter = new Waiter();
const barista = new Barista();
const courier = new Courier();

cheff.prepareFood();
waiter.serveFood();
barista.makeCocktails();
courier.deliverToEvent();

// With Facade
const cateringService = new CateringService();
cateringService.cater();
