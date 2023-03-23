import { inMemoryNotificationRepository } from '../../test/repositories/in-memory-notification-repository';
import { SendNoticiation } from './send-notification';

describe('Send notification', () => {
  it('should be able send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();

    const sendNotification = new SendNoticiation(notificationsRepository);

    const { notification } = await sendNotification.run({
      content: 'Nova notificação!',
      category: 'News',
      recipient_id: 'example-id',
    });

    notificationsRepository.create(notification);

    expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
