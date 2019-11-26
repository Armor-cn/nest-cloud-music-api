import { ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, calls$: CallHandler): Observable<any>;
}
