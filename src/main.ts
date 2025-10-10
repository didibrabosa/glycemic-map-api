import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.setGlobalPrefix('glycemic-map-api');

  const config = new DocumentBuilder()
    .setTitle('Glycemic Map API')
    .setDescription('API para monitoramento e análise de níveis glicêmicos com geração automatizada de relatórios em PDF')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/glycemic-map-api/swagger', app, document, {
      customSiteTitle: 'Glycemic Map API',
      customCss: '.swagger-ui .topbar { display: none }',
  });
  
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();