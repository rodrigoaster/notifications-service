import { Module } from '@nestjs/common';
import { INotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: INotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [INotificationRepository, PrismaService],
})
export class DatabaseModule {}
