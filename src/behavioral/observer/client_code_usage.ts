import { Table, Waiter } from "./pattern_implementation";

const waiterJohn = new Waiter("John");
const waiterPeter = new Waiter("Peter");
const waiterSofia = new Waiter("Sofia");
const waiterSasha = new Waiter("Sasha");
const table1 = new Table();
const table2 = new Table();

table1.addObserver(waiterJohn);
table1.addObserver(waiterPeter);
table2.addObserver(waiterSofia);
table2.addObserver(waiterSasha);

table1.notify();
table2.notify();
