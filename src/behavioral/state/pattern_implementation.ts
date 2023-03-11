interface State {
	status(): string;
	next(pkg: Package): void;
}

export class SentState implements State {
	status(): string {
		return "Sent";
	}
	next(pkg: Package): void {
		pkg.setState(new DeliveringState());
	}
}

export class DeliveringState implements State {
	status(): string {
		return "Delivering ...";
	}
	next(pkg: Package): void {
		pkg.setState(new ReceivedState());
	}
}

export class ReceivedState implements State {
	status(): string {
		return "Received";
	}
	next(pkg: Package): void {
		console.log("Package already received!");
	}
}

export class Package {
	// For simplicity, we consider "Sent" as the initial state
	private state: State = new SentState();
	private recipient: Person;

	public setRecipient(recipient: Person): void {
		this.recipient = recipient;
	}

	public nextState(): void {
		this.state.next(this);
	}

	public setState(state: State): void {
		this.state = state;
	}

	public printStatus(): void {
		console.log(`Package for ${this.recipient.name} -> Status: ${this.state.status()}`);
	}
}

export class Person {
	readonly name: string;
	constructor(name: string) {
		this.name = name;
	}

	public sendPackageTo(recipient: Person, pkg: Package): void {
		pkg.setRecipient(recipient);
	}
}
