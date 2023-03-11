import { Better, Faster, Harder, Human, Stronger } from "./implementation";

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
