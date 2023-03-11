import { Pizza, Pizzaiolo } from "./implementation";

// Without Builder
const pizza: Pizza = new Pizza("medium", 2, false, true, false);

// With Builder
const theSamePizza: Pizza = Pizzaiolo.makePizza().ofSize("medium").extraCheese().extraCheese().withTomato().cook();
