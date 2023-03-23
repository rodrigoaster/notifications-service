import { Notification } from '../entities/notification';

export abstract class INotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
