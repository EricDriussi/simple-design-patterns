abstract class TemplateHouseBuilder {
	build() {
		this.buildFloor();
		this.buildWalls();
		this.buildWindows();
		this.buildRoof();
	}

	abstract buildFloor(): void;
	abstract buildWalls(): void;
	abstract buildWindows(): void;
	abstract buildRoof(): void;
}

export class USHouseBuilder extends TemplateHouseBuilder {
	buildFloor() {
		console.log("Building floor with concrete");
	}

	buildWalls() {
		console.log("Building walls with plywood");
	}

	buildWindows() {
		console.log("Building windows with single glass");
	}

	buildRoof() {
		console.log("Building roof with asphalt shingles");
	}
}

export class EUHouseBuilder extends TemplateHouseBuilder {
	buildFloor() {
		console.log("Building floor with concrete");
	}

	buildWalls() {
		console.log("Building walls with bricks");
	}

	buildWindows() {
		console.log("Building windows with double glass");
	}

	buildRoof() {
		console.log("Building roof with clay shingles");
	}
}
