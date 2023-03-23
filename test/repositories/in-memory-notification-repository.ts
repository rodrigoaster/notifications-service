import { Notification } from 'src/app/entities/notification';
import { INotificationRepository } from '../../src/app/repositories/notification-repository';

export class inMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
