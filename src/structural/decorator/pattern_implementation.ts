interface Singer {
	sing(): string;
}

export class Human implements Singer {
	sing(): string {
		return "Ehm... ";
	}
}

abstract class HumanDecorator implements Singer {
	constructor(readonly human: Human) {}
	sing(): string {
		return this.human.sing();
	}
}

export class Harder extends HumanDecorator {
	sing(): string {
		return super.sing() + "Work it harder, ";
	}
}

export class Better extends HumanDecorator {
	sing(): string {
		return super.sing() + "Make it better, ";
	}
}

export class Faster extends HumanDecorator {
	sing(): string {
		return super.sing() + "Do it faster, ";
	}
}

export class Stronger extends HumanDecorator {
	sing(): string {
		return super.sing() + "Makes us stronger, ";
	}
}
