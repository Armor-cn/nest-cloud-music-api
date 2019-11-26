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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const model_interface_1 = require("../interface/model.interface");
class TopSongAttribute {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'ID', required: true }),
    __metadata("design:type", String)
], TopSongAttribute.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '租户ID', required: true }),
    __metadata("design:type", String)
], TopSongAttribute.prototype, "groupId", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '名称', required: true }),
    __metadata("design:type", String)
], TopSongAttribute.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '描述', required: false }),
    __metadata("design:type", String)
], TopSongAttribute.prototype, "description", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '是否是系统项', required: true }),
    __metadata("design:type", Number)
], TopSongAttribute.prototype, "isSystem", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '是否禁用', required: true }),
    __metadata("design:type", Number)
], TopSongAttribute.prototype, "isDisabled", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '创建时间', required: false }),
    __metadata("design:type", Date)
], TopSongAttribute.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '更新时间', required: false }),
    __metadata("design:type", Date)
], TopSongAttribute.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '删除时间', required: false }),
    __metadata("design:type", Date)
], TopSongAttribute.prototype, "deletedAt", void 0);
exports.TopSongAttribute = TopSongAttribute;
//# sourceMappingURL=cloudmusic.attribute.js.map