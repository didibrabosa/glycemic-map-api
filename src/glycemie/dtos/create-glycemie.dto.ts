import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Glycemie } from "../entites/glycemie.entitie";

export class CreateGlycemieDto {
    @ApiProperty({
        description: 'Measured blood sugar level in mg/dL',
        required: true,
        example: 95
    })
    @IsNumber()
    @IsNotEmpty()
    glycemie: number;

    @ApiProperty({
        description: 'Meal type at the time of measurement',
        required: true,
        example: 'Dinner'
    })
    @IsString()
    @IsNotEmpty()
    meal: string;

    constructor(init?: Partial<CreateGlycemieDto>) {
        Object.assign(this, init);
      }
    
    asEntity(): Glycemie {
        const entity = Object.assign(new Glycemie(), this);
        return entity;
    }
}