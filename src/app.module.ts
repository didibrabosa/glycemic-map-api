import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { GlycemiaModule } from './glycemia/glycemia.module';

@Module({
  imports: [DatabaseModule, GlycemiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}