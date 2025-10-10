import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

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
    status: 200, 
    description: 'Application is working',
    schema: {
      type: 'string',
      example: 'health!'
    }
  })
  getHealth(): string {
    return this.appService.getHealth();
  }
}