// Mediator
export class Management {
	readonly departments: Array<Department>;

	public addDepartment(department: Department) {
		this.departments.push(department);
	}

	public employeeNeededIn(requestingDepartment: Department) {
		this.departments.forEach((department) => {
			if (
				department.name !== requestingDepartment.name &&
				department.employees.length > requestingDepartment.employees.length
			) {
				const employee = department.employees.pop();
				requestingDepartment.employees.push(employee);
			}
		});
	}
}

export class Department {
	readonly management: Management;
	readonly employees: Array<Employee>;
	readonly name: string;

	constructor(mediator: Management, name: string) {
		this.management = mediator;
		this.name = name;
		this.employees = [new Employee("Peter"), new Employee("John")];
	}

	moreEmployeesNeeded() {
		this.management.employeeNeededIn(this); // Delegates logic to Mediator
	}
}

export class Employee {
	readonly name: string;
	constructor(name: string) {
		this.name = name;
	}
}
