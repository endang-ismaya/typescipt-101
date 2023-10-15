function greet(name: string = 'world'): string {
    return `Hello ${name.toUpperCase()}`;
}

console.log(greet('Home'));
console.log(greet());

function greetMulti(...names: string[]): void {
    names.forEach((name) => {
        console.log(greet(name));
    });
}

greetMulti('Mary', 'jane', 'samsons', 'Betwa');

type Job = {
    tasks: string[];
    start: Function;
};

const noJob: Job = {
    tasks: [],
    start: () => {},
};
