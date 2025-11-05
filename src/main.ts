import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true }
    })
  );
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
  
    const port = process.env.API_PORT;

    await app.listen(port, '0.0.0.0');
  
    logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();