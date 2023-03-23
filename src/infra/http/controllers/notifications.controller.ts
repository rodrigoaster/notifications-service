import { Body, Controller, Post } from '@nestjs/common';
import { SendNoticiation } from 'src/use-cases/send-notification';

import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNoticiation) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipient_id } = body;

    const { notification } = await this.sendNotification.run({
      recipient_id,
      content,
      category,
    });

    return { notification };
  }
}
