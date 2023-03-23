import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { INotificationRepository } from '../../../../app/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements INotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipient_id: notification.recipientId,
        read_at: notification.readAt,
        created_at: notification.createdAt,
      },
    });
  }
}
