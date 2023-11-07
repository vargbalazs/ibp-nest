import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
import { Request, Response } from 'express';
import { TypeOrmErrorDetails } from '../interfaces/typeorm-error-details.interface';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errorDetails = exception as unknown as TypeOrmErrorDetails;

    response.status(500).json({
      statusCode: 500,
      error: 'Internal server error',
      message: 'Database error',
      details: {
        code: errorDetails.code,
        detail: errorDetails.detail,
      },
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
