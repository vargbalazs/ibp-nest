import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { validationExceptionFactory } from './common/exceptions/validation.exception';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = app.get(AppConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: validationExceptionFactory,
    }),
  );

  app.use(cookieParser());

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'Access-Control-Allow-Origin',
      'Content-Type',
      'Accept',
      'Jwt-Token',
      'Authorization',
      'Origin',
      'Accept',
      'X-Requested-With',
      'Access-Control-Request-Method',
    ],
    exposedHeaders: [
      'Origin',
      'Content-Type',
      'Accept',
      'Jwt-Token',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
    credentials: true,
  });

  await app.listen(appConfig.port);
}
bootstrap();
