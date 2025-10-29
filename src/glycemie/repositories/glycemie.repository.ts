import { Glycemie } from "../entites/glycemie.entitie";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GlycemieRepository {
    constructor(
        @InjectRepository(Glycemie)
        private readonly repository
    ) {}
    
    async create(glycemie: Glycemie): Promise<Glycemie> {
        return this.repository.save(glycemie);
    }

    async getAll(): Promise<Glycemie[]> {
        return this.repository.find();
    }

    async delete(glycemiaId: number): Promise<void> {
        return this.repository.delete(glycemiaId);
    }
}