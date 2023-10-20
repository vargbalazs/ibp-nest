import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpExceptionResponse } from '../interfaces/http-exception-response.interface';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.getStatus();

    const httpExceptionResponse =
      exception.getResponse() as HttpExceptionResponse;

    response.status(statusCode).json({
      statusCode: statusCode,
      error: httpExceptionResponse.error,
      message: httpExceptionResponse.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
