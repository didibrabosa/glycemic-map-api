import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
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
        summary: 'Create a glycemie measurement',
        description: 'Records a new glycemie measurement with automatic classification'
    })
    @ApiResponse({ 
        status: HttpStatus.CREATED,
        description: 'Glycemic measurement created successfully',
        type: GlycemieResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in create a new glycemie',
        type: ErrorResponseDto,
      })
    async create(@Body() body: CreateGlycemieDto,): Promise <GlycemieResponseDto> {
        return this.service.create(body);
    }

    @ApiOperation({
        summary: 'Get all glycemie measurements',
        description: 'Retrieves a complete list of all glycemie measurements with their classifications and timestamps'
    })
    @ApiResponse({ 
        status: HttpStatus.OK,
        description: 'List of glycemie measurements retrieved successfully',
        type: [GlycemieResponseDto]
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in listing all glycemies',
        type: ErrorResponseDto,
      })
    @Get('/')
    async getAll(): Promise<GlycemieResponseDto[]> {
        return this.service.getdAll();
    }

    @ApiOperation({
        summary: 'Delete a glycemie measurement',
        description: 'Deletes a specific glycemie measurement by id'
    })
    @ApiResponse({ 
        status: HttpStatus.OK,
        description: 'Glycemie measurement deleted successfully'
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in delete a glycemie',
        type: ErrorResponseDto,
    })
    @Delete('/:id')
    async delete(@Param('id') glycemiaId: number): Promise<void> {
        return this.service.delete(glycemiaId);
    }
}