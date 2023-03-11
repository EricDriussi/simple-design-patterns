interface Observer {
	update(): void;
}

export class Waiter implements Observer {
	constructor(private name: string) {}

	public update() {
		console.log(`Waiter ${this.name} has been notified!`);
	}
}

// AKA Subject
interface Observable {
	addObserver(observer: Observer): void;
	notify(): void;
}

export class Table implements Observable {
	private observers: Array<Observer>;

	public addObserver(observer: Observer) {
		this.observers.push(observer);
	}

	public notify() {
		this.observers.forEach((observer) => observer.update());
	}
}
