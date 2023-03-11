interface Memento {
	getState(): string;
}

interface Originator {
	save(): Memento;
	restore(memento: Memento): void;
}

export class TextEditor implements Originator {
	fileContent = "";
	write(text: string): void {
		this.fileContent.concat(text);
	}
	print(): string {
		return this.fileContent;
	}

	save(): Memento {
		return new SavedState(this.fileContent);
	}
	restore(memento: Memento): void {
		this.fileContent = memento.getState();
	}
}

export class SavedState implements Memento {
	state: string;
	constructor(state: string) {
		this.state = state;
	}

	getState(): string {
		return this.state;
	}
}
