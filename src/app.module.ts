import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { GlycemieModule } from './glycemie/glycemie.module';

@Module({
  imports: [DatabaseModule, GlycemieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}