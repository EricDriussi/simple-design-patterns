import { Better, Faster, Harder, Human, Stronger } from "./pattern_implementation";

let human = new Human();
console.log(human.sing()); // "Ehm... "

human = new Harder(human);
console.log(human.sing()); // "Ehm... Work it harder, "

human = new Better(human);
console.log(human.sing()); // "Ehm... Work it harder, Make it better, "

human = new Faster(human);
console.log(human.sing()); // "Ehm... Work it harder, Make it better, Do it faster, "

human = new Stronger(human);
console.log(human.sing()); // "Ehm... Work it harder, Make it better, Do it faster, Makes us stronger, "

// OR
const human2 = new Stronger(new Faster(new Better(new Harder(new Human()))));
console.log(human2.sing()); // "Ehm... Work it harder, Make it better, Do it faster, Makes us stronger, "
