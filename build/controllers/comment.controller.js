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
const comment_service_1 = require("../services/comment.service");
const swagger_1 = require("@nestjs/swagger");
const cloudmusic_dto_1 = require("../dto/cloudmusic.dto");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async comment() {
    }
    async commentMusic(commentMusicDto) {
        return await this.commentService.commentMusic(commentMusicDto);
    }
    async commentAlbum(commentAlbum) {
        return await this.commentService.commentAlbum(commentAlbum);
    }
    async commentPlayList(commentPlayListDto) {
        return await this.commentService.commentPlayList(commentPlayListDto);
    }
    async commentMv(commentMvDto) {
        return await this.commentService.commentMv(commentMvDto);
    }
    async commentDj(commentDjDto) {
        return await this.commentService.commentDj(commentDjDto);
    }
    async commentVideo(commentVideoDto) {
        return await this.commentService.commentVideo(commentVideoDto);
    }
    async commentHot(commentHotDto) {
        return await this.commentService.commentHot(commentHotDto);
    }
    async commentLike(commentLikeDto) {
        return await this.commentService.commentLike(commentLikeDto);
    }
};
__decorate([
    swagger_1.ApiOperation({ title: '发送/删除评论', description: '说明 : 调用此接口,可发送评论或者删除评论' }),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "comment", null);
__decorate([
    swagger_1.ApiOperation({ title: '歌曲评论', description: '说明: 调用此接口, 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 ) 实例: /comment/music?id=186016&limit=1 对应晴天评论' }),
    common_1.Get('/music'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentMusicDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentMusic", null);
__decorate([
    swagger_1.ApiOperation({ title: '专辑评论', description: '说明: 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 ) 实例: /comment/album?id=32311' }),
    common_1.Get('/album'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentAlbumDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentAlbum", null);
__decorate([
    swagger_1.ApiOperation({ title: '歌单评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 ) , 实例: /comment/playlist?id=705123491' }),
    common_1.Get('/playlist'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentPlayListDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentPlayList", null);
__decorate([
    swagger_1.ApiOperation({ title: 'mv 评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 ) 实例: /comment/mv?id=5436712' }),
    common_1.Get('/mv'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentMvDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentMv", null);
__decorate([
    swagger_1.ApiOperation({ title: '电台节目评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 ( 不需要登录 ) 实例: /comment/dj?id=794062371' }),
    common_1.Get('/dj'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentDjDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentDj", null);
__decorate([
    swagger_1.ApiOperation({ title: '视频评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 ( 不需要登录 ) 实例: /comment/video?id=89ADDE33C0AAE8EC14B99F6750DB954D' }),
    common_1.Get('/video'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentVideoDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentVideo", null);
__decorate([
    swagger_1.ApiOperation({ title: '热门评论', description: '说明 : 调用此接口 , 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 ) 实例: /comment/hot?id=186016&type=0 ' }),
    common_1.Get('/hot'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentHotDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentHot", null);
__decorate([
    swagger_1.ApiOperation({ title: '给评论点赞', description: '说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 ) 实例：/comment/like?id=29178366&cid=12840183&t=1&type=0 对应给 https://music.163.com/#/song?id=29178366 最热门的评论点赞' }),
    common_1.Get('/like'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.CommentLikeDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "commentLike", null);
CommentController = __decorate([
    swagger_1.ApiUseTags('评论'),
    common_1.Controller('comment'),
    __param(0, common_1.Inject(comment_service_1.CommentService)),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map