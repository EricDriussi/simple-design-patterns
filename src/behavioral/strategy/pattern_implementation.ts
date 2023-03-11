interface Strategy {
	send(recipient: Person, message: string): void;
}

export class EmailStrategy implements Strategy {
	send(recipient: Person, message: string): void {
		console.log(`Emailing ${recipient.name} with message: ${message}`);
	}
}

export class SMSStrategy implements Strategy {
	send(recipient: Person, message: string): void {
		console.log(`Sending SMS to ${recipient.name} with message: ${message}`);
	}
}

export class Person {
	readonly name: string;
	constructor(name: string) {
		this.name = name;
	}

	talkTo(other: Person, message: string, strategy: Strategy): void {
		strategy.send(other, message);
	}
}
