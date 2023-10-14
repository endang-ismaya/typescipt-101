let firstName = 'John'; // string
let isAdmin = false; // boolean
let age = 30; // number

let duties = ['read book', 'fix bugs']; // string[]

let car = null; // any
let bicycle = undefined; // any

let work = () => {
    console.log('Working');
}; // void

// let salary = 50n; // bigint -> ES2020
let logo = Symbol('emerald'); // symbol
let all = [firstName, isAdmin, age, car, bicycle, duties, work, logo];

for (const item of all) {
    console.log(String(item) + ' is ' + typeof item);
}
