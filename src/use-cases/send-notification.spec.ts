import { SendNoticiation } from './send-notification';

describe('Send notification', () => {
  it('should be able send a notification', () => {
    const sendNotification = new SendNoticiation();

    const notification = sendNotification.run({
      content: 'Nova notificação!',
      category: 'News',
      recipient_id: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
