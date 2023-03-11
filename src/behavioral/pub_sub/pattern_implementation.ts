interface Subscriber {
	subscribe(event: Event): void;
	onEvent(): void;
}

export class Passenger implements Subscriber {
	constructor(private name: string, private broker: Broker) {}
	public subscribe(event: Event): void {
		this.broker.match(this, event);
	}
	public onEvent(): void {
		this.doTheThing();
	}

	private doTheThing(): void {
		console.log(`Passenger ${this.name} reacted to event!`);
	}
}

interface Publisher {
	publish(): void;
}

export class AirlineA implements Publisher {
	constructor(private broker: Broker) {}
	public publish(): void {
		this.broker.newEvent(isLateEvent);
	}
}

export class AirlineB implements Publisher {
	constructor(private broker: Broker) {}
	public publish(): void {
		this.broker.newEvent(goToGateEvent);
	}
}

// AKA Event Bus
interface Broker {
	match(sub: Subscriber, event: Event): void;
	newEvent(event: Event): void;
}

export class Display implements Broker {
	private eventList: Map<Event, Subscriber> = new Map();
	public match(sub: Subscriber, event: Event): void {
		this.eventList.set(event, sub);
	}
	public newEvent(event: Event): void {
		this.eventList.get(event).onEvent();
	}
}

type Event = { NAME: string };
export const isLateEvent: Event = { NAME: "AIRPLANE_IS_LATE" };
export const goToGateEvent: Event = { NAME: "AIRPLANE_IS_LATE" };
