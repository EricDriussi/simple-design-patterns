import { AirlineA, AirlineB, Display, Passenger, isLateEvent, goToGateEvent } from "./pattern_implementation";

const airportDisplay = new Display();
// Airlines and Passangers are only coupled to Display
const airlineA = new AirlineA(airportDisplay);
const airlineB = new AirlineB(airportDisplay);
const passengerJohn = new Passenger("John", airportDisplay);
const passengerPeter = new Passenger("Peter", airportDisplay);

// Each passenger only knows about the event he is interested in
passengerJohn.subscribe(goToGateEvent);
passengerPeter.subscribe(isLateEvent);

airlineA.publish();
airlineB.publish();
// All passengers receive the information they care about (nothing else) and know what to do about it
