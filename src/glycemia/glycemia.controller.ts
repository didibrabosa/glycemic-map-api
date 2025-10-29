import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GlycemiaService } from "./glycemia.service";
import { CreateGlycemiaDto } from "./dtos/create-glycemia.dto";
import { GlycemiaResponseDto } from "./dtos/response-glycemia.dto";
import { ErrorResponseDto } from "../common/dtos/error-response.dto";

@ApiTags('Glycemia')
@Controller('glycemia')
export class GlycemiaConstroller {
    constructor(
        private readonly service: GlycemiaService,
    ) {}

    @Post('/')
    @ApiOperation({
        summary: 'Create a glycemia measurement',
        description: 'Records a new glycemia measurement with automatic classification'
    })
    @ApiResponse({ 
        status: HttpStatus.CREATED,
        description: 'Glycemic measurement created successfully',
        type: GlycemiaResponseDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in create a new glycemia',
        type: ErrorResponseDto,
      })
    async create(@Body() body: CreateGlycemiaDto,): Promise <GlycemiaResponseDto> {
        return this.service.create(body);
    }

    @ApiOperation({
        summary: 'Get all glycemia measurements',
        description: 'Retrieves a complete list of all glycemia measurements with their classifications and timestamps'
    })
    @ApiResponse({ 
        status: HttpStatus.OK,
        description: 'List of glycemia measurements retrieved successfully',
        type: [GlycemiaResponseDto]
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in listing all glycemias',
        type: ErrorResponseDto,
      })
    @Get('/')
    async getAll(): Promise<GlycemiaResponseDto[]> {
        return this.service.getdAll();
    }

    @ApiOperation({
        summary: 'Delete a glycemia measurement',
        description: 'Deletes a specific glycemia measurement by id'
    })
    @ApiResponse({ 
        status: HttpStatus.OK,
        description: 'Glycemia measurement deleted successfully'
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Error in delete a glycemia',
        type: ErrorResponseDto,
    })
    @Delete('/:id')
    async delete(@Param('id') glycemiaId: number): Promise<void> {
        return this.service.delete(glycemiaId);
    }
}