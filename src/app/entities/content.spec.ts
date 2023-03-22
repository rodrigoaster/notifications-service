import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification conent', () => {
    const content = new Content('VOcê recebeu uma solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with moren than 5 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
