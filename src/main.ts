import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configManager, HttpExceptionFilter } from '@common/config';
import { swaggerConfiguration } from '@common/documentation';
import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigKey } from '@common/config/enum';
import { ApiInterceptor } from '@common/api/api.interceptor';
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(configManager.getValue(ConfigKey.APP_BASE_URL));
  swaggerConfiguration.config(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) =>
        new BadRequestException(validationErrors),
    }),
  );
  app.useGlobalInterceptors(new ApiInterceptor());
  await app.listen(parseInt(configManager.getValue(ConfigKey.APP_PORT), 10));
};

bootstrap().then(() => {
  const logger = new Logger('Main Logger');
  logger.log('Server is started !!');
});
