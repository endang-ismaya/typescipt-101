// 1. Arrays
const hobbies: string[] = ['reading', 'coding', 'hiking'];
const favFoods: Array<string> = ['gulai kambing', 'pizza', 'karedok'];

// add method
hobbies.push('swimming');

const newHobbies: string[] = hobbies.map((item: string) => item.toUpperCase());

console.log(hobbies);
console.log(newHobbies);

// 2. Tuple
let employeeLockerCode: [string, number] = ['John', 234];
employeeLockerCode.push('haha');
console.log(employeeLockerCode);
