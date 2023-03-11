abstract class Car {
	color: Color;
	madeIn: string;
	constructor(readonly clor: Color, readonly origin: string) {
		this.color = clor;
		this.madeIn = origin;
	}
	abstract printColor(): string;
}

export class Mercedes extends Car {
	constructor(readonly color: Color) {
		super(color, "Germany");
	}

	printColor(): string {
		return this.color.print();
	}
}

export class Ford extends Car {
	constructor(readonly color: Color) {
		super(color, "USA");
	}

	printColor(): string {
		return this.color.print();
	}
}

interface Color {
	print(): string;
}

export class Red implements Color {
	print(): string {
		return "Red";
	}
}

export class Blue implements Color {
	print(): string {
		return "Blue";
	}
}
