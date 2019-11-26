"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, calls$) {
        return calls$.handle().pipe(operators_1.catchError((error, caught) => {
            if (error instanceof common_1.HttpException) {
                return Promise.resolve({
                    code: error.getStatus(),
                    message: error.getResponse()
                });
            }
            console.log(error);
            if (error.response.data.code === 301) {
                return Promise.resolve({
                    code: error.response.data.code || null,
                    message: error.response.data.msg
                });
            }
        }));
    }
};
ErrorsInterceptor = __decorate([
    common_1.Injectable()
], ErrorsInterceptor);
exports.ErrorsInterceptor = ErrorsInterceptor;
//# sourceMappingURL=error.interceptor.js.map