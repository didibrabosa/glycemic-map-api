import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GlycemiaStatus } from "../../common/enums/glycemia-satus.enum";

@Entity({name: 'glycemia'})
export class Glycemia {
    @PrimaryGeneratedColumn({name: 'glycemia_id'})
    glycemiaId: number;

    @Column({
        name: 'glycemia',
        type: 'int',
    })
    glycemia: number;

    @Column({
        name: 'result',
        type: 'enum',
        enum: GlycemiaStatus,
    })
    result: GlycemiaStatus;

    @Column({
        name: 'meal',
        type: 'varchar',
    })
    meal: string;

    @Column({
        name: 'observation',
        type: 'varchar',
    })
    observation: string;

    @Column({
        name: 'created_at',
        type: 'timestamp',
    })
    created_at: Date;

    @Column({
        name: 'updated_at',
        type: 'timestamp',
    })
    updated_at: Date;
}