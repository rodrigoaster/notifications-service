import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/database/database.module';

import { HttpModule } from '../src/infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
