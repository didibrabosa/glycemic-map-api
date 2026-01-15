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

    async getAllGlycemias(userId: string): Promise<Glycemia[]> {
        return this.repository
            .createQueryBuilder('glycemia')
            .where('glycemia.clerk_user_id = :userId', { userId })
            .orderBy('glycemia.created_at', 'DESC')
            .getMany();
    }

    async deleteGlycemia(glycemiaId: number, userId: string): Promise<void> {
        return this.repository
            .createQueryBuilder('glycemia')
            .delete()
            .where('glycemia.glycemia_id = :glycemiaId', { glycemiaId })
            .andWhere('glycemia.clerk_user_id = :userId', { userId })
            .execute()
    }
}