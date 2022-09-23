import { Login, User } from "./interface";

// import * as UserLogin from './interface';

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login {
  #id: number;

  protected name: string;

  address: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }
  login(): User {
    return { name: "John", id: 1, email: "" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalore",
  state: "Karnataka",
  pin: "560076",
});

john.empId = 100;

console.log(john.empId);

// Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = john.getNameWithAddress();

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());
