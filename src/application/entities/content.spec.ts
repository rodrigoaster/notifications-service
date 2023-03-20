import { Content } from './content';

test('it should be able to create a notification conent', () => {
  const content = new Content('VOcê recebeu uma solicitação');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with çess than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create a notification content with çess than 5 characters', () => {
  expect(() => new Content('a'.repeat(256))).toThrow();
});
