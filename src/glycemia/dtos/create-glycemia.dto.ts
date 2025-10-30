import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateGlycemiaDto {
    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        required: true,
        example: 95
    })
    @IsNumber()
    @IsNotEmpty()
    @MaxLength(999)
    glycemia: number;

    @ApiProperty({
        description: 'Meal type at the time of measurement',
        required: true,
        example: 'Dinner'
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    meal: string;

    @ApiProperty({
        description: 'Observation of measurement',
        required: false,
        example: 'In fasting'
    })
    @IsString()
    @IsOptional()
    observation: string;
}