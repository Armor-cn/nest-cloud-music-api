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
const cloudmusic_service_1 = require("../services/cloudmusic.service");
const swagger_1 = require("@nestjs/swagger");
const cloudmusic_dto_1 = require("../dto/cloudmusic.dto");
const cloudmusic_attribute_1 = require("../attribute/cloudmusic.attribute");
let CloudMusicController = class CloudMusicController {
    constructor(cloudMusicService) {
        this.cloudMusicService = cloudMusicService;
    }
    async topSong(topSongDto) {
        return await this.cloudMusicService.topSong(topSongDto);
    }
    async banner(bannerDto) {
        return await this.cloudMusicService.banner(bannerDto);
    }
    async resourceLike() {
    }
    async songDetails(songDetailsDto) {
        return await this.cloudMusicService.songDetails(songDetailsDto);
    }
    async album(albumDto) {
        return await this.cloudMusicService.album(albumDto);
    }
    async albumDetailDynamic(albumDetailDynamicDto) {
        return await this.cloudMusicService.albumDetailDynamic(albumDetailDynamicDto);
    }
    async albumSub(albumSubDto) {
        return await this.cloudMusicService.albumSub(albumSubDto);
    }
    async albumSubList(albumSubListDto) {
        return await this.cloudMusicService.albumSubList(albumSubListDto);
    }
    async artists(artistsDto) {
        return await this.cloudMusicService.artists(artistsDto);
    }
    async artistsMv(artistsMvDto) {
        return await this.cloudMusicService.artistsMv(artistsMvDto);
    }
    async artistAlbum(artistsAlbumDto) {
        return await this.cloudMusicService.artistsAlbum(artistsAlbumDto);
    }
    async artistDesc(artistsDescDto) {
        return await this.cloudMusicService.artistDesc(artistsDescDto);
    }
    async simiArtist(artistsDescDto) {
        return await this.cloudMusicService.simiArtist(artistsDescDto);
    }
    async simiPlaylist(artistsDescDto) {
        return await this.cloudMusicService.simiPlaylist(artistsDescDto);
    }
    async simiMv(simiMvDto) {
        return await this.cloudMusicService.simiMv(simiMvDto);
    }
    async simiSong(simiSongDto) {
        return await this.cloudMusicService.simiSong(simiSongDto);
    }
    async simiUser(simiUserDto) {
        return await this.cloudMusicService.simiUser(simiUserDto);
    }
    async recommendResource() {
        return await this.cloudMusicService.recommendResource();
    }
    async recommendSongs() {
        return await this.cloudMusicService.recommendSongs();
    }
    async personalFm() {
        return await this.cloudMusicService.personalFm();
    }
    async dailySignin(dailySigninDto) {
        return await this.cloudMusicService.dailySignin(dailySigninDto);
    }
    async like(likeDto) {
        return await this.cloudMusicService.like(likeDto);
    }
    async likeLsit(likeListDto) {
        return await this.cloudMusicService.likeList(likeListDto);
    }
    async fmTrash(fmTrashDto) {
        return await this.cloudMusicService.fmTrash(fmTrashDto);
    }
    async topAlbum(topAlbumDto) {
        return await this.cloudMusicService.topAlbum(topAlbumDto);
    }
    async albumNewest() {
        return await this.cloudMusicService.albumNewest();
    }
    async scrobble(scrobbleDto) {
        return await this.cloudMusicService.scrobble(scrobbleDto);
    }
    async topArtists(topArtistsDto) {
        return await this.cloudMusicService.topArtists(topArtistsDto);
    }
    async mvAll(mvAllDto) {
        return await this.cloudMusicService.mvAll(mvAllDto);
    }
    async mvFirst(mvFirstDto) {
        return await this.cloudMusicService.mvFirst(mvFirstDto);
    }
};
__decorate([
    swagger_1.ApiOperation({ title: '新歌速递', description: '调用此接口, 可获取新歌速递，实例: /top/song?type=0' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: cloudmusic_dto_1.TopSongDto, description: 'type' }),
    swagger_1.ApiResponse({ status: 201, type: [cloudmusic_attribute_1.TopSongAttribute] }),
    common_1.Get('/top/song'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.TopSongDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "topSong", null);
__decorate([
    swagger_1.ApiOperation({ title: 'banner', description: '说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据  实例 : /banner, /banner?type=2' }),
    common_1.Get('/banner'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.BannerDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "banner", null);
__decorate([
    swagger_1.ApiOperation({ title: '资源点赞( MV,电台,视频)', description: '说明 : 调用此接口 , 可对 MV,电台,视频点赞 实例： /resource/like?t=1&type=1&id=5436712' }),
    common_1.Get('/resource/like'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "resourceLike", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取歌曲详情', description: ' 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取) 实例: /song/detail?ids=347230,/song/detail?ids=347230,347231' }),
    common_1.Get('/song/detail'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.SongDetailsDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "songDetails", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取专辑内容', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容 shil： /album?id=32311' }),
    common_1.Get('/album'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.AlbumDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "album", null);
__decorate([
    swagger_1.ApiOperation({ title: '专辑动态信息', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数, 实例：/album/detail/dynamic?id=32311' }),
    common_1.Get('/album/detail/dynamic'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.AlbumDetailDynamicDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "albumDetailDynamic", null);
__decorate([
    swagger_1.ApiOperation({ title: '收藏/取消收藏专辑', description: '说明 : 调用此接口,可收藏/取消收藏专辑, 实例：/album/sub?id=xxx&t=1 /album/sub?id=xxx&t=0' }),
    common_1.Get('/album/sub'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.AlbumSubDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "albumSub", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取已收藏专辑列表', description: '说明 : 调用此接口 , 可获得已收藏专辑列表,（需要登录） 实例： /album/sublist ' }),
    common_1.Get('/album/sublist'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.AlbumSubListDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "albumSubList", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取歌手单曲', description: '说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲 实例：/artists?id=6452 ' }),
    common_1.Get('/artists'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "artists", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取歌手 mv', description: '说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064' }),
    common_1.Get('/artists/mv'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsMvDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "artistsMv", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取歌手专辑', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容， 实例: /artist/album?id=6452&limit=30 ( 周杰伦 )' }),
    common_1.Get('/artist/album'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsAlbumDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "artistAlbum", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取歌手描述', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述 实例：  /artist/desc?id=6452 ( 周杰伦 )' }),
    common_1.Get('/artist/desc'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsDescDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "artistDesc", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取相似歌手', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手 (需要登录) 实例： /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )' }),
    common_1.Get('/simi/artist'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsDescDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "simiArtist", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取相似歌单', description: ' 说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单 实例： /simi/playlist?id=347230 ( 对应 光辉岁月  相似歌单 )' }),
    common_1.Get('/simi/playlist'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsDescDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "simiPlaylist", null);
__decorate([
    swagger_1.ApiOperation({ title: '相似 mv', description: '说明 : 调用此接口 , 传入 mvid 可获取相似 mv 实例： /simi/mv?mvid=5436712 ' }),
    common_1.Get('/simi/mv'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.SimiMvDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "simiMv", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取相似音乐', description: '说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲  实例： /simi/song?id=347230' }),
    common_1.Get('/simi/song'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ArtistsDescDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "simiSong", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取最近 5 个听了这首歌的用户', description: '说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户 实例/simi/user?id=347230 ( 对应  光辉岁月  相似歌曲 )' }),
    common_1.Get('/simi/user'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.SimiUserDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "simiUser", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取每日推荐歌单', description: '说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )  实例 /recommend/resource ' }),
    common_1.Get('/recommend/resource'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "recommendResource", null);
__decorate([
    swagger_1.ApiOperation({ title: '获取每日推荐歌曲', description: '说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 ) 实例  /recommend/songs' }),
    common_1.Get('/recommend/songs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "recommendSongs", null);
__decorate([
    swagger_1.ApiOperation({ title: '私人 FM', description: '说明 : 私人 FM( 需要登录 ) 实例 /personal_fm' }),
    common_1.Get('/personal_fm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "personalFm", null);
__decorate([
    swagger_1.ApiOperation({ title: '签到', description: ' 说明 : 调用此接口 , 传入签到类型 ( 可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 ), 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验 实例 /daily_signin' }),
    common_1.Get('/daily_signin'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.dailySigninDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "dailySignin", null);
__decorate([
    swagger_1.ApiOperation({ title: '喜欢音乐', description: ' 说明 :  调用此接口 , 传入音乐 id, 可喜欢该音乐 实例  /like?id=347230' }),
    common_1.Get('/like'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.LikeDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "like", null);
__decorate([
    swagger_1.ApiOperation({ title: '喜欢音乐列表', description: '说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组) (需要登录) 实例：/likelist?uid=32953014' }),
    common_1.Get('/likelist'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.LikeListDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "likeLsit", null);
__decorate([
    swagger_1.ApiOperation({ title: '垃圾桶', description: '说明 : 调用此接口 , 传入音乐 id, 可把该音乐从私人 FM 中移除至垃圾桶 (需要登录) 实例：/fm_trash?id=347230' }),
    common_1.Get('/fm_trash'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.FmTrashDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "fmTrash", null);
__decorate([
    swagger_1.ApiOperation({ title: '新碟上架', description: '说明 : 调用此接口 , 可获取新碟上架列表, 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30 ,本接口实例： /top/album?offset=0&limit=30' }),
    common_1.Get('/top/album'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.TopAlbumDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "topAlbum", null);
__decorate([
    swagger_1.ApiOperation({ title: '最新专辑', description: '说明 : 调用此接口 ，获取云音乐首页新碟上架数据 实例： /album/newest' }),
    common_1.Get('/album/newest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "albumNewest", null);
__decorate([
    swagger_1.ApiOperation({ title: '听歌打卡', description: '说明 : 调用此接口 , 传入音乐 id, 来源 id，歌曲时间 time，更新听歌排行数据 实例： /scrobble?id=518066366&sourceid=36780169&time=291' }),
    common_1.Get('/scrobble'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.ScrobbleDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "scrobble", null);
__decorate([
    swagger_1.ApiOperation({ title: '热门歌手', description: ' 说明 : 调用此接口 , 可获取热门歌手数据 实例： /top/artists?offset=0&limit=30' }),
    common_1.Get('/top/artists'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.TopArtistsDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "topArtists", null);
__decorate([
    swagger_1.ApiOperation({ title: '全部 mv', description: '说明 : 调用此接口 , 可获取全部 mv 实例：  /mv/all?area=韩国&order=最热&limit=1' }),
    common_1.Get('/mv/all'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.MvAllDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "mvAll", null);
__decorate([
    swagger_1.ApiOperation({ title: '最新 mv', description: '说明 : 调用此接口 , 可获取最新 mv 实例: /mv/first?limit=10' }),
    common_1.Get('/mv/first'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cloudmusic_dto_1.MvFirstDto]),
    __metadata("design:returntype", Promise)
], CloudMusicController.prototype, "mvFirst", null);
CloudMusicController = __decorate([
    swagger_1.ApiUseTags('网易云音乐Api'),
    common_1.Controller(),
    __param(0, common_1.Inject(cloudmusic_service_1.CloudMusicService)),
    __metadata("design:paramtypes", [cloudmusic_service_1.CloudMusicService])
], CloudMusicController);
exports.CloudMusicController = CloudMusicController;
//# sourceMappingURL=cloudmusic.controller.js.map