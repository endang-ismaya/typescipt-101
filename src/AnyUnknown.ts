let queryResult: any = 5; //disable type check
// can be modified with any other type
queryResult = '5';
queryResult = [10];

function getSalaryFromExternalService(employeeId: number): unknown {
    return JSON.parse('5');
}

let salary = getSalaryFromExternalService(123);

if (typeof salary === 'number') {
    // type narrowing
    salary++;
}
if (typeof salary === 'string') {
    // type narrowing
    salary.includes('$');
}

if (typeof salary === 'string' || typeof salary === 'number') {
    // type narrowing
    salary.valueOf();
}

if (
    salary &&
    typeof salary === 'object' &&
    'history' in salary &&
    Array.isArray(salary.history)
) {
    salary.history.push(12000);
}
