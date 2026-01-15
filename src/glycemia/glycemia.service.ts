import { Injectable } from "@nestjs/common";
import { GlycemiaRepository } from "./repositories/glycemia.repository";
import { CreateGlycemiaDto } from "./dtos/create-glycemia.dto";
import { Glycemia } from "./entites/glycemia.entitie";
import { GlycemiaResponseDto } from "./dtos/response-glycemia.dto";
import { classifyGlycemia } from "../common/enums/glycemia-satus.enum";

@Injectable()
export class GlycemiaService {
    constructor(
        private readonly repository: GlycemiaRepository,
    ) {}

    async createGlycemia(dto: CreateGlycemiaDto, userId: string): Promise<GlycemiaResponseDto> {
        const entity = new Glycemia();
        entity.glycemia = dto.glycemia;
        entity.result = classifyGlycemia(dto.glycemia);
        entity.meal = dto.meal;
        entity.observation = dto.observation;

        const date = new Date();
        if (!dto.measuredAt) {
            entity.created_at = date;
        }
        else {
            entity.created_at = dto.measuredAt;
        }

        entity.updated_at = date;
        entity.clerk_user_id = userId;

        const result = await this.repository.createGlycemia(entity);
        return new GlycemiaResponseDto(result);
    }

    async getdAllGlycemias(userId: string): Promise<GlycemiaResponseDto[]> {
        const result = await this.repository.getAllGlycemias(userId);
        return result.map(glycemias => new GlycemiaResponseDto(glycemias));
    }

    async deleteGlycemia(glycemiaId: number, userId: string): Promise<void> { 
        await this.repository.deleteGlycemia(glycemiaId, userId);
    }
}