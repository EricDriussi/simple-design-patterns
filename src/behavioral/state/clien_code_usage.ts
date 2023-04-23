import { Person, Package } from "./pattern_implementation";

const peter = new Person("Peter");
const john = new Person("John");

const pkg = new Package();
peter.sendPackageTo(john, pkg);

pkg.printStatus(); // Package for John -> Status: Sent

// Once the package gets to the courier, the package state would change
pkg.nextState();
pkg.printStatus(); // Package for John -> Status: Delivering ...

// Once the package gets to the recipient, the package state would change
pkg.nextState();
pkg.printStatus(); // Package for John -> Status: Received

// Notice how the state changing and the probing (printStatus()) can happen
// in different places and times
// Notice also that the possible states are unknown to who is changing them (nextState())
