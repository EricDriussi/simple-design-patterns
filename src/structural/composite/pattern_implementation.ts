export interface SoftwareCreator {
	estimateDeliveryTime(features: number): number;
}

export class JuniorDeveloper implements SoftwareCreator {
	readonly daysPerFeature = 15;
	estimateDeliveryTime(features: number): number {
		return this.daysPerFeature * features;
	}
}

export class SeniorDeveloper implements SoftwareCreator {
	readonly daysPerFeature = 5;
	estimateDeliveryTime(features: number): number {
		return this.daysPerFeature * features;
	}
}

export class DevelopmentFirm implements SoftwareCreator {
	constructor(private readonly developers: SoftwareCreator[]) {}
	// Disregard the complexity of this function.
	// Rather, focus on how it behaves the same for a group of devs as for an individual.
	// Implementation details may vary, but in the end it just gives an estimate.
	estimateDeliveryTime(features: number): number {
		const groupVelocitySum = this.developers.reduce((prev, curr) => {
			return prev + curr.estimateDeliveryTime(1);
		}, 0);
		const averageGroupVelocity = groupVelocitySum / this.developers.length;
		// 9 pregnant women delivering a baby in 1 month...
		return (averageGroupVelocity / this.developers.length) * features;
	}
}
