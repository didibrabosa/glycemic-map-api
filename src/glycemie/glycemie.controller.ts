import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GlycemieService } from "./glycemie.service";
import { CreateGlycemieDto } from "./dtos/create-glycemie.dto";
import { GlycemieResponseDto } from "./dtos/response-glycemie.dto";
import { ErrorResponseDto } from "../common/dtos/error-response.dto";

@ApiTags('Glycemie')
@Controller('glycemie')
export class GlycemieConstroller {
    constructor(
        private readonly service: GlycemieService,
    ) {}

    @Post('/')
    @ApiOperation({
        summary: 'Create a glycemie',
        description: 'Records a new glycemie measurement with automatic classification'
    })
    @ApiResponse({ 
        status: HttpStatus.CREATED,
        description: 'Glycemic measurement created successfully',
        type: GlycemieResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in create a new Vehicle',
        type: ErrorResponseDto,
      })
    async create(@Body() body: CreateGlycemieDto,): Promise <GlycemieResponseDto> {
        return this.service.create(new CreateGlycemieDto(body))
    }
}