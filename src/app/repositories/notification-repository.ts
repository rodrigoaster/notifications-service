import { Notification } from '../entities/notification';

export interface INotificationRepository {
  create(notification: Notification): Promise<void>;
}
