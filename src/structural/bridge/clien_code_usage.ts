import { Blue, Ford, Mercedes, Red } from "./pattern_implementation";

const redFord = new Ford(new Red());
redFord.madeIn; // "USA"
redFord.printColor(); // "Red"

const blueMercedes = new Mercedes(new Blue());
blueMercedes.madeIn; // "Germany"
blueMercedes.printColor(); // "Blue"

// Notice how there is no need for a classes like "BlueMercedes" or "RedFord",
// we can instead compose these objects as needed, simplifying the architecture
