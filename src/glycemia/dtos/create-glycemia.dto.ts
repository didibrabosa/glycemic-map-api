import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGlycemiaDto {
    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        required: true,
        example: 95
    })
    @IsNumber()
    @IsNotEmpty()
    glycemia: number;

    @ApiProperty({
        description: 'Meal type at the time of measurement',
        required: true,
        example: 'Dinner'
    })
    @IsString()
    @IsNotEmpty()
    meal: string;
}