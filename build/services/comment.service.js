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
const base_service_1 = require("./base.service");
let CommentService = class CommentService extends base_service_1.BaseService {
    constructor(httpService) {
        super();
        this.httpService = httpService;
    }
    async commentMusic(commentMusicDto) {
        if (!commentMusicDto.id) {
            throw new common_1.BadRequestException(`id must be passed`);
        }
        const data = {
            rid: commentMusicDto.id,
            limit: commentMusicDto.limit || 20,
            offset: commentMusicDto.offset || 0,
            beforeTime: commentMusicDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/music?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentAlbum(commentAlbumDto) {
        if (!commentAlbumDto.id) {
            throw new common_1.BadRequestException(`id must be passed`);
        }
        const data = {
            rid: commentAlbumDto.id,
            limit: commentAlbumDto.limit || 20,
            offset: commentAlbumDto.offset || 0,
            beforeTime: commentAlbumDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/album?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentPlayList(commentPlayListDto) {
        if (!commentPlayListDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        const data = {
            rid: commentPlayListDto.id,
            limit: commentPlayListDto.limit || 20,
            offset: commentPlayListDto.offset || 0,
            beforeTime: commentPlayListDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/playlist?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentMv(commentMvDto) {
        if (!commentMvDto.id) {
            throw new common_1.BadRequestException(`id must be passed`);
        }
        const data = {
            rid: commentMvDto.id,
            limit: commentMvDto.limit || 20,
            offset: commentMvDto.offset || 0,
            beforeTime: commentMvDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/mv?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentDj(commentDjDto) {
        if (!commentDjDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        const data = {
            rid: commentDjDto.id,
            limit: commentDjDto.limit || 20,
            offset: commentDjDto.offset || 0,
            beforeTime: commentDjDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/dj?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentVideo(commentVideoDto) {
        if (!commentVideoDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        const data = {
            rid: commentVideoDto.id,
            limit: commentVideoDto.limit || 20,
            offset: commentVideoDto.offset || 0,
            beforeTime: commentVideoDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/video?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentHot(commentHotDto) {
        if (!commentHotDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        if (!commentHotDto.type) {
            throw new common_1.BadRequestException(`type  must be passed `);
        }
        const data = {
            rid: commentHotDto.id,
            type: commentHotDto.type,
            limit: commentHotDto.limit || 20,
            offset: commentHotDto.offset || 0,
            beforeTime: commentHotDto.beforeTime || 0
        };
        const bashApi = this.cloudMusicApi + `comment/hot?id=${data.rid}&type=${data.type}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
    async commentLike(commentLikeDto) {
        if (!commentLikeDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        if (!commentLikeDto.type) {
            throw new common_1.BadRequestException(`type must be passed`);
        }
        if (!commentLikeDto.t) {
            throw new common_1.BadRequestException('t must be passed');
        }
        if (!commentLikeDto.type) {
            throw new common_1.BadRequestException(' type must be passed');
        }
        const data = {
            id: commentLikeDto.id,
            cid: commentLikeDto.cid,
            t: commentLikeDto.t,
            type: commentLikeDto.type
        };
        const bashApi = this.cloudMusicApi + `comment/like?id=${data.id}&cid=${data.cid}&t=${data.t}&type=${data.type}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return res.data;
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.HttpService)),
    __metadata("design:paramtypes", [common_1.HttpService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map