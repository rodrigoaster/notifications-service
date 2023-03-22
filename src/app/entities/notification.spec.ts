import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New solicitation'),
      category: 'social',
      recipient_id: 'example-reci-id',
    });

    expect(notification).toBeTruthy();
  });
});
