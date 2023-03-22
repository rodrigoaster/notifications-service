import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prsima: PrismaService) {}

  @Get()
  list() {
    return this.prsima.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipient_id } = body;

    await this.prsima.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipient_id,
      },
    });
  }
}
