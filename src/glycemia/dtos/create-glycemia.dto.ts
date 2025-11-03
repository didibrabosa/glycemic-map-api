import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateGlycemiaDto {
    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        required: true,
        example: 95,
        type: Number
    })
    @IsNumber()
    @Min(0)
    @Max(999)
    @IsNotEmpty()
    glycemia: number;

    @ApiProperty({
        description: 'Meal type at the time of measurement',
        required: true,
        example: 'Dinner',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    meal: string;

    @ApiProperty({
        description: 'Observation of measurement',
        required: false,
        example: 'In fasting',
        type: String
    })
    @IsString()
    @IsOptional()
    observation: string;

    @ApiProperty({
        description: 'Date and time of the measurement',
        required: false,
        example: '2025-10-15T13:30:00.000Z',
        type: String,
    })
    @IsOptional()
    @IsDate()
    mesureAt?: Date;
}