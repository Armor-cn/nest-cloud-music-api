import { ExecutionContext, HttpException, Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, calls$: CallHandler): Observable<any> {
        return calls$.handle().pipe(catchError((error, caught) => {
            if (error instanceof HttpException) {
                return Promise.resolve({
                    code: error.getStatus(),
                    message: error.getResponse()
                });
            }
            // 捕捉到网易接口报出来的 301 状态码
            if (error.response.data.code === 301) {
                return Promise.resolve({
                    code: error.response.data.code || null,
                    message: error.response.data.msg
                });
            }
        }));
    }
}