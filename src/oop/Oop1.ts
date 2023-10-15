class Project1 {
    protected name: string;
    budget: number;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`);
    }
}

// create object of project1
const project1 = new Project1('CoolProject', 10);
project1.printBudget();
// console.log(project1.name); error

// inheritance
class SecretProject extends Project1 {
    secrecyLevel = 1 | 2 | 3;

    constructor(secrecyLevel: 1 | 2 | 3) {
        super('Secret Project', 10_000);
        this.secrecyLevel = secrecyLevel;
    }

    override printBudget() {
        console.log(`${this.name} has a budget of 'secret'`);
    }
}

const secretProject = new SecretProject(3);
secretProject.printBudget();
