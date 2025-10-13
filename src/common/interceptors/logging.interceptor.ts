import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        const status = res.statusCode;
        const duration = Date.now() - start;
        this.logger.log(`${method} ${url} ${status} - ${duration}ms`);
      }),
      catchError((error) => {
        const duration = Date.now() - start;
        this.logger.error(
          `${method} ${url} - ${error.status || 500} (${duration}ms) → ${error.message}`,
        );
        return throwError(() => error);
      }),
    );
  }
}
