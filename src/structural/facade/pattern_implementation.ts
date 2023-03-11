export class Cheff {
	prepareFood() {
		console.log("Preparing food");
	}
}

export class Waiter {
	serveFood() {
		console.log("Serving food");
	}
}

export class Barista {
	makeCocktails() {
		console.log("Making cocktails");
	}
}

export class Courier {
	deliverToEvent() {
		console.log("Delivering");
	}
}

// Facade
export class CateringService {
	cater() {
		const cheff = new Cheff();
		const waiter = new Waiter();
		const barista = new Barista();
		const courier = new Courier();

		cheff.prepareFood();
		waiter.serveFood();
		barista.makeCocktails();
		courier.deliverToEvent();
	}
}
