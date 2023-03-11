interface Command {
	execute(): void;
}

export class Order implements Command {
	private receiver: Receiver;
	private payload: string;

	constructor(receiver: Receiver, payload: string) {
		this.receiver = receiver;
		this.payload = payload;
	}

	execute(): void {
		this.receiver.prepare(this.payload);
	}
}

interface Receiver {
	prepare(thing: string): void;
}

export class Cheff implements Receiver {
	prepare(dish: string): void {
		console.log(`Cheff: Cooking requested dish: (${dish}.)`);
	}
}

export class Bartender implements Receiver {
	prepare(beverage: string): void {
		console.log(`Bartender: Preparing requested beverage: (${beverage}.)`);
	}
}

// Invoker
export class Waiter {
	placeOrder(command: Command): void {
		command.execute();
	}
}
