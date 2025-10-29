import { Glycemia } from "../entites/glycemia.entitie";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GlycemiaRepository {
    constructor(
        @InjectRepository(Glycemia)
        private readonly repository
    ) {}
    
    async create(glycemia: Glycemia): Promise<Glycemia> {
        return this.repository.save(glycemia);
    }

    async getAll(): Promise<Glycemia[]> {
        return this.repository.find();
    }

    async delete(glycemiaId: number): Promise<void> {
        return this.repository.delete(glycemiaId);
    }
}