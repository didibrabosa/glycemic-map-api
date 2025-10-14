import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GlycemieStatus } from "../../common/enums/glycemie-satus.enum";

@Entity({name: 'glycemie'})
export class Glycemie {
    @PrimaryGeneratedColumn({name: 'glycemie_id'})
    glycemieId: number;

    @Column({name: 'glycemie'})
    glycemie: number;

    @Column({
        name: 'result',
        type: 'enum',
        enum: GlycemieStatus
    })
    result: GlycemieStatus;

    @Column({name: 'meal'})
    meal: string

    @Column({name: 'created_at'})
    created_at: Date

    @Column({name: 'updated_at'})
    updated_at: Date
}