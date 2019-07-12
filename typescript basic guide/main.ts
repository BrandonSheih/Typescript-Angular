export {}

//let variables don't need to be declared
//const variables have to be declared
//any variables means it can be anything
//cannot access, call, or change a variable of type unknown
//too access, call, or change a variable of type unknown you need to do ' as string' or ' as number' etc

let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Brandon';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['chris', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Brandon';

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

function add(num1: number, num2: number = 10) { //num2?: number causes the number to be undefined if a number is not called
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

interface Person {
    firstName: string;
    lastName?: string; //question mark makes the property optional(not needed)
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Brandons');
console.log(emp1.employeeName);
emp1.greet();

//inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//access modifers
//by default variables are public
//public employeeName: string -> public
//private employeeName: string -> means the variable is only visible in the class it is made
//protected employeeName: string -> means the variable is visible to all classes that inherit variable
