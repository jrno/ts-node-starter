import { greet } from '../src/greeter/greeter';

test('greets by name "fi"', () => {
    expect(greet({ name: 'tester', language: 'fi' })).toBe('moro tester');
});
test('greets by name "en"', () => {
    expect(greet({ name: 'tester', language: 'en' })).toBe('hello tester');
});
test('throws on unknown lang', () => {
    expect(() => greet({ name: 'tester', language: 'ru' })).toThrow();
});
