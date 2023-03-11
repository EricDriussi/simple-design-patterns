import { ToDo, ToDoContainer } from "./implementation";

const toDos = [new ToDo("a thing", 10), new ToDo("another thing", 30), new ToDo("yet another thing", 20)];

const toDoContainer = new ToDoContainer(toDos);
const iter = toDoContainer.iterator();

// Iteration logic is hidden
while (iter.hasNext()) {
	console.log(iter.next().theTask());
}
