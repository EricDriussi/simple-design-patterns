export class Pizza {
	constructor(
		readonly size: string,
		readonly cheese: number,
		readonly pepperoni: boolean,
		readonly tomato: boolean,
		readonly pineapple: boolean
	) {}
}

// Builder
export class Pizzaiolo {
	size = "medium";
	cheese = 0;
	pepperoni = false;
	tomato = false;
	pineapple = false;

	public withTomato(): Pizzaiolo {
		this.tomato = true;
		return this;
	}

	public extraCheese(): Pizzaiolo {
		this.cheese += 1;
		return this;
	}

	public ofSize(size: string): Pizzaiolo {
		this.size = size;
		return this;
	}

	public static makePizza(): Pizzaiolo {
		return new Pizzaiolo();
	}

	public cook(): Pizza {
		return new Pizza(this.size, this.cheese, this.pepperoni, this.tomato, this.pineapple);
	}
}
