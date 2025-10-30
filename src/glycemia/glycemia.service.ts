import { Injectable } from "@nestjs/common";
import { GlycemiaRepository } from "./repositories/glycemie.repository";
import { CreateGlycemiaDto } from "./dtos/create-glycemia.dto";
import { Glycemia } from "./entites/glycemia.entitie";
import { GlycemiaResponseDto } from "./dtos/response-glycemia.dto";
import { classifyGlycemia } from "../common/enums/glycemia-satus.enum";

@Injectable()
export class GlycemiaService {
    constructor(
        private readonly repository: GlycemiaRepository,
    ) {}

    async createGlycemia(dto: CreateGlycemiaDto): Promise<GlycemiaResponseDto> {
        const entity = new Glycemia();
        entity.glycemia = dto.glycemia;
        entity.result = classifyGlycemia(dto.glycemia);
        entity.meal = dto.meal;

        const date = new Date();
        entity.created_at = date;
        entity.updated_at = date;

        const result = await this.repository.createGlycemia(entity);
        return new GlycemiaResponseDto(result);
    }

    async getdAllGlycemia(): Promise<GlycemiaResponseDto[]> {
        const result = await this.repository.getAllGlycemias()
        return result.map(glycemias => new GlycemiaResponseDto(glycemias));
    }

    async deleteGlycemia(glycemiaId: number): Promise<void> {
        return this.repository.deleteGlycemia(glycemiaId);
    }
}