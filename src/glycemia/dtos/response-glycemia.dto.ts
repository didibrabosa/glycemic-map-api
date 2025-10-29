import { ApiProperty } from "@nestjs/swagger";
import { Glycemia } from "../entites/glycemia.entitie";

export class GlycemiaResponseDto {
    @ApiProperty({
        description: 'Glycemia id',
        example: 1
    })
    glycemiaId: number;

    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        example: 95
    })
    glycemia: number;

    @ApiProperty({
        description: 'Classification of glycemia level',
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

    constructor(glycemia: Glycemia) {
        this.glycemiaId = glycemia.glycemiaId;
        this.glycemia = glycemia.glycemia;
        this.result = glycemia.result;
        this.meal = glycemia.meal;
        this.measuredAt = glycemia.created_at;
        this.updatedAt = glycemia.updated_at;
    }
}