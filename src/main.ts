import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { validationExceptionFactory } from './common/exceptions/validation.exception';

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

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(appConfig.port);
}
bootstrap();
