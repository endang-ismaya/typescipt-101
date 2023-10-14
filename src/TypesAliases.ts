// type aliases: define the shape of an object

type Position = 'Programmer' | 'HR';

const myPos: Position = 'Programmer';

type Person = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function;
};
