import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ErrorResponseDto } from './common/dtos/error-response.dto';

@ApiTags('Health Check')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ 
    summary: 'Health check',
    description: 'Check if the application is working correctly'
  })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Application is working',
    example: 'health!'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error in the application',
    type: ErrorResponseDto,
        })
  getHealth(): string {
    return this.appService.getHealth();
  }
}