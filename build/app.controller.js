"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const cloudmusic_service_1 = require("./services/cloudmusic.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService, cloudMusicService) {
        this.appService = appService;
        this.cloudMusicService = cloudMusicService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    swagger_1.ApiOperation({ title: '默认' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    swagger_1.ApiUseTags('Test Api 接口'),
    common_1.Controller(),
    __param(0, common_1.Inject(app_service_1.AppService)),
    __param(1, common_1.Inject(cloudmusic_service_1.CloudMusicService)),
    __metadata("design:paramtypes", [app_service_1.AppService,
        cloudmusic_service_1.CloudMusicService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map