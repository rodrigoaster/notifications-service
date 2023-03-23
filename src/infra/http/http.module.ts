import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { SendNoticiation } from 'src/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNoticiation],
})
export class HttpModule {}
