import { DevelopmentFirm, JuniorDeveloper, SeniorDeveloper, SoftwareCreator } from "./pattern_implementation";

class ProductOwner {
	// Doesn't matter if it's a firm or a lone dev, as long as it fits the interface
	constructor(private readonly engineeringDepartment: SoftwareCreator) {}
	deliverASimpleProduct(): void {
		const est = this.engineeringDepartment.estimateDeliveryTime(3);
		console.log(`The product will be delivered in ${est} days.`);
	}

	deliverAComplexProduct(): void {
		const est = this.engineeringDepartment.estimateDeliveryTime(50);
		console.log(`The product will be delivered in ${est} days.`);
	}
}

const junior = new JuniorDeveloper();
const senior = new SeniorDeveloper();
const firm = new DevelopmentFirm([junior, senior]); // A firm could just as easily incorporate another firm

const po1 = new ProductOwner(junior);
po1.deliverASimpleProduct(); // The product will be delivered in 45 days.
po1.deliverAComplexProduct(); // The product will be delivered in 750 days.

// Client code in unaffected by the nature of the "engineeringDepartment" object.
const po2 = new ProductOwner(firm);
po2.deliverASimpleProduct(); // The product will be delivered in 15 days.
po2.deliverAComplexProduct(); // The product will be delivered in 250 days.
