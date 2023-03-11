export class ToDo {
	constructor(readonly task: string, readonly relevance: number) {}
	public theTask(): string {
		return `Task: ${this.task}`;
	}
}

export class ToDoContainer {
	constructor(private readonly toDos: Array<ToDo>) {}
	public iterator(): Iterator<ToDo> {
		return new ByRelevanceIterator(this.toDos);
	}
}

interface Iterator<T> {
	next(): T;
	hasNext(): boolean;
}

// More iterators can be added (ByAlphabeticalOrder...)
class ByRelevanceIterator implements Iterator<ToDo> {
	constructor(private readonly toDos: Array<ToDo>) {
		this.toDos.concat(toDos).sort((a, b) => {
			return a.relevance - b.relevance;
		});
	}
	private position: number;

	next(): ToDo {
		const toDo = this.toDos[this.position];
		this.position += 1;
		return toDo;
	}

	hasNext(): boolean {
		return this.position < this.toDos.length;
	}
}
