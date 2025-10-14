import { ApiProperty } from "@nestjs/swagger";
import { Glycemie } from "../entites/glycemie.entitie";

export class GlycemieResponseDto {

    @ApiProperty({
        description: 'Glycemie id',
        example: 1
    })
    glycemieId: number;

    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        example: 95
    })
    glycemie: number;

    @ApiProperty({
        description: 'Classification of glycemie level',
        example: 'Normal'
    })
    result: string;

    @ApiProperty({
        description: 'Meal type at the time of measurement',
        example: 'Dinner'
    })
    meal: string;

    @ApiProperty({
        description: 'When the measurement was created',
        example: '2025-10-14T13:30:00.000Z'
    })
    measuredAt: Date;

    @ApiProperty({
        description: 'When the measurement was last updated',
        example: '2025-10-15T13:30:00.000Z'
    })
    updatedAt: Date;

    constructor(glycemie: Glycemie) {
        this.glycemieId = glycemie.glycemieId;
        this.glycemie = glycemie.glycemie;
        this.result = glycemie.result;
        this.meal = glycemie.meal;
        this.measuredAt = glycemie.created_at;
        this.updatedAt = glycemie.updated_at;
    }
}