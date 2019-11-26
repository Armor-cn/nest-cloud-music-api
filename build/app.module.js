"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cloudmusic_controller_1 = require("./controllers/cloudmusic.controller");
const cloudmusic_service_1 = require("./services/cloudmusic.service");
const core_1 = require("@nestjs/core");
const error_interceptor_1 = require("./common/error.interceptor");
const comment_module_1 = require("./modules/comment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [comment_module_1.CommentModule, common_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            })],
        controllers: [app_controller_1.AppController, cloudmusic_controller_1.CloudMusicController],
        providers: [{
                provide: core_1.APP_INTERCEPTOR,
                useClass: error_interceptor_1.ErrorsInterceptor
            }, app_service_1.AppService, cloudmusic_service_1.CloudMusicService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map