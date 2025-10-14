import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  
  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('glycemic-map-api');

  const config = new DocumentBuilder()
    .setTitle('Glycemic Map API')
    .setDescription('API for monitoring and analyzing glycemic levels with automated generation of PDF reports')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/glycemic-map-api/swagger', app, document,
    );
  
  await app.listen(3000);
  logger.log('🚀 Application is running on: http://localhost:3000');
}
bootstrap();