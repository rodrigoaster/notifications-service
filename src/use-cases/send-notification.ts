import { Notification } from '../app/entities/notification';
import { Content } from '../app/entities/content';
import { INotificationRepository } from '../app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface SendNotificationRequest {
  recipient_id: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNoticiation {
  constructor(private notificationRepository: INotificationRepository) {}

  async run(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipient_id, content, category } = request;

    const notification = new Notification({
      recipient_id,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
