import { EmailStrategy, Person, SMSStrategy } from "./pattern_implementation";

const peter = new Person("Peter");
const john = new Person("John");

const byEmail = new EmailStrategy();
peter.talkTo(john, "Hello John!", byEmail);

const bySMS = new SMSStrategy();
john.talkTo(peter, "Hello Peter!", bySMS);
