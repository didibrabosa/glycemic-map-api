import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GlycemiaStatus } from "../../common/enums/glycemia-satus.enum";

@Entity({name: 'glycemia'})
export class Glycemia {
    @PrimaryGeneratedColumn({name: 'glycemia_id'})
    glycemiaId: number;

    @Column({name: 'glycemia'})
    glycemia: number;

    @Column({
        name: 'result',
        type: 'enum',
        enum: GlycemiaStatus
    })
    result: GlycemiaStatus;

    @Column({name: 'meal'})
    meal: string

    @Column({name: 'created_at'})
    created_at: Date

    @Column({name: 'updated_at'})
    updated_at: Date
}