import { Pizza, Pizzeria } from "./pattern_implementation";

// Without Factory
const margherita: Pizza = new Pizza("medium", 1, false, true, false);
const pepperoni: Pizza = new Pizza("medium", 1, true, true, false);

// With Factory
const theSameMargherita: Pizza = Pizzeria.makeMargherita();
const theSamePepperoni: Pizza = Pizzeria.makePepperoni();
