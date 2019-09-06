export function greet(person: Person): string {
    if (person.language === 'fi') {
        return `moro ${person.name}`;
    } else if (person.language === 'en') {
        return `hello ${person.name}`;
    }
    throw new Error('invalid language ' + person.language);
}
