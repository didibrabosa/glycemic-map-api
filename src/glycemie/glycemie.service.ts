import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GlycemieRepository } from "./repositories/glycemie.repository";
import { CreateGlycemieDto } from "./dtos/create-glycemie.dto";
import { Glycemie } from "./entites/glycemie.entitie";
import { GlycemieResponseDto } from "./dtos/response-glycemie.dto";
import { classifyGlycemie } from "../common/enums/glycemie-satus.enum";

@Injectable()
export class GlycemieService {
    constructor(
        private readonly repository: GlycemieRepository,
    ) {}

    async create(dto: CreateGlycemieDto): Promise<GlycemieResponseDto> {
        const entity = new Glycemie();
        entity.glycemie = dto.glycemie;
        entity.result = classifyGlycemie(dto.glycemie);
        entity.meal = dto.meal;

        const date = new Date();
        entity.created_at = date;
        entity.updated_at = date;

        const result = await this.repository.create(entity);
        return new GlycemieResponseDto(result);
    }
}