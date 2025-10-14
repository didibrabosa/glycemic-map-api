import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glycemie } from './entites/glycemie.entitie';
import { GlycemieRepository } from './repositories/glycemie.repository';
import { GlycemieService } from './glycemie.service';
import { GlycemieConstroller } from './glycemie.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Glycemie])
  ],
  controllers: [GlycemieConstroller],
  providers: [GlycemieService, GlycemieRepository],
  exports: [GlycemieService],
})
export class GlycemieModule {}