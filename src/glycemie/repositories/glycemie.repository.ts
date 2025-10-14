import { Glycemie } from "../entites/glycemie.entitie";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGlycemieDto } from "../dtos/create-glycemie.dto";

@Injectable()
export class GlycemieRepository {
    constructor(
        @InjectRepository(Glycemie)
        private readonly repository
    ) {}
    
    async create(glycemie: Glycemie): Promise<Glycemie> {
        return this.repository.save(glycemie)
    }
}