import { greet } from './greeter/greeter';

const person: Person = {
    name: process.argv[2] ? process.argv[2] : 'Anonymous',
    language: process.argv[3] ? process.argv[3] : 'fi',
};

console.log(greet(person));
