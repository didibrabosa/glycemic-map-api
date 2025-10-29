import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glycemia } from './entites/glycemia.entitie';
import { GlycemiaRepository } from './repositories/glycemie.repository';
import { GlycemiaService } from './glycemia.service';
import { GlycemiaConstroller } from './glycemia.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Glycemia])
  ],
  controllers: [GlycemiaConstroller],
  providers: [GlycemiaService, GlycemiaRepository],
  exports: [GlycemiaService],
})
export class GlycemiaModule {}