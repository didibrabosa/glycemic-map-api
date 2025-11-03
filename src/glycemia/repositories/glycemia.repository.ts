import { Glycemia } from "../entites/glycemia.entitie";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GlycemiaRepository {
    constructor(
        @InjectRepository(Glycemia)
        private readonly repository
    ) {}
    
    async createGlycemia(glycemia: Glycemia): Promise<Glycemia> {
        return this.repository.save(glycemia);
    }

    async getAllGlycemias(): Promise<Glycemia[]> {
        return this.repository
            .createQueryBuilder("glycemia")
            .orderBy("glycemia.created_at", "DESC")
            .getMany();
    }

    async deleteGlycemia(glycemiaId: number): Promise<void> {
        this.repository.delete(glycemiaId);
    }
}