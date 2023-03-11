import { Department, Management } from "./implementation";

const management = new Management();

const frontEnd = new Department(management, "frontEnd");
const backEnd = new Department(management, "backEnd");

management.addDepartment(frontEnd);
management.addDepartment(backEnd);

frontEnd.moreEmployeesNeeded(); // Delegates logic to Mediator
// Without a mediator, frontEnd  would have to traverse
// the rest of the departments to find a suitable employee
