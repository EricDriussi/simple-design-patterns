export class Pizza {
	constructor(
		readonly size: string,
		readonly cheese: number,
		readonly pepperoni: boolean,
		readonly tomato: boolean,
		readonly pineapple: boolean
	) {}
}

// Factory
export class Pizzeria {
	size = "medium";
	cheese = 0;
	pepperoni = false;
	tomato = false;
	pineapple = false;

	public static makeMargherita(): Pizza {
		return new Pizza("medium", 1, false, true, false);
	}

	public static makePepperoni(): Pizza {
		return new Pizza("medium", 1, true, true, false);
	}
}
