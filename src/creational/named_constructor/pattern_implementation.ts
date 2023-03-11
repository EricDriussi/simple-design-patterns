export class Pizza {
	constructor(
		readonly size: string,
		readonly cheese: number,
		readonly pepperoni: boolean,
		readonly tomato: boolean,
		readonly pineapple: boolean
	) {}

	public static margherita(): Pizza {
		return new Pizza("medium", 1, false, true, false);
	}

	public static pepperoni(): Pizza {
		return new Pizza("medium", 1, true, true, false);
	}
}
