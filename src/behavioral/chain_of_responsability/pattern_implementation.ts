export class TechSupportCall {
	constructor(public callerName: string, public issue: string, public complexity: Complexity) {}
}

interface ChainLink<T> {
	setNext(next: ChainLink<T>): ChainLink<T>;
	handle(item: T): void;
}

// Not strictly needed, used to remove duplicated logic
abstract class TechSupport implements ChainLink<TechSupportCall> {
	protected nextLink: ChainLink<TechSupportCall>;
	setNext(next: ChainLink<TechSupportCall>) {
		this.nextLink = next;
		return this.nextLink;
	}
	handle(call: TechSupportCall) {
		if (this.nextLink) {
			this.nextLink.handle(call);
		}
	}
}

export class InitTechSupportChain extends TechSupport {
	handle(call: TechSupportCall) {
		if (!call.issue) {
			console.log("No issue provided, aborting.");
		} else {
			super.handle(call);
		}
	}
}

export class BasicTechSupport extends TechSupport {
	handle(call: TechSupportCall) {
		if (call.complexity == Complexity.LOW) {
			console.log("Low complexity, basic tech support can take care of it...");
		} else {
			super.handle(call);
		}
	}
}

export class IntermediateTechSupport extends TechSupport {
	handle(call: TechSupportCall) {
		if (call.complexity == Complexity.MEDIUM) {
			console.log("Medium complexity, intermediate tech support can take care of it...");
		} else {
			super.handle(call);
		}
	}
}

export class AdvancedTechSupport extends TechSupport {
	handle(call: TechSupportCall) {
		if (call.complexity == Complexity.HIGH) {
			console.log("High complexity, advanced tech support is needed...");
		} else {
			super.handle(call);
		}
	}
}

export class SysAdminTechSupport extends TechSupport {
	handle(call: TechSupportCall) {
		if (call.complexity == Complexity.IMPOSSIBLE) {
			console.log("This is tough, call the sysadmin...");
		} else {
			super.handle(call);
		}
	}
}

export enum Complexity {
	LOW,
	MEDIUM,
	HIGH,
	IMPOSSIBLE,
}
