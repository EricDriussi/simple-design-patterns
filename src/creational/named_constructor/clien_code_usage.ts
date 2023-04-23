import { Pizza } from "./pattern_implementation";

// Without Named Constructor
const margherita: Pizza = new Pizza("medium", 1, false, true, false);
const pepperoni: Pizza = new Pizza("medium", 1, true, true, false);

// With Named Constructor
const theSameMargherita: Pizza = Pizza.margherita();
const theSamePepperoni: Pizza = Pizza.pepperoni();
// Notice how, if we made the constructor private,
// one could only have margherita or pepperoni.
