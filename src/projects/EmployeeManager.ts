import { randomBytes } from 'crypto';

type Employee = {
    name: string;
    id: string;
    email: string;
    salary: number;
};

function generateRandomId() {
    return randomBytes(10).toString('hex');
}

function createEmployee(employeeName: string, salary: number): Employee {
    return {
        name: employeeName,
        id: generateRandomId(),
        email: `${employeeName}@coolcomp.com`,
        salary: salary,
    };
}

// create new employees
const peter = createEmployee('Peter', 100000);
const dan = createEmployee('Dan', 80000);
const allNewEmployees = [peter, dan];

const sendWelcomeMessage = (employee: Employee) => {
    console.log(`To: ${employee.email}
    Hello ${employee.name}!
    Welcome to our awesome company!
    Your ID: ${employee.id}
    Your salary will be ${employee.salary}
    `);
};

allNewEmployees.forEach((employee) => sendWelcomeMessage(employee));
