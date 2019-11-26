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
class TopSongDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 :type: 地区类型 id, 对应以下: 全部:0，华语:7，欧美:96，日本:8，韩国:16', required: true, default: 0 }),
    __metadata("design:type", Number)
], TopSongDto.prototype, "type", void 0);
exports.TopSongDto = TopSongDto;
class CommentMusicDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentMusicDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentMusicDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentMusicDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentMusicDto.prototype, "beforeTime", void 0);
exports.CommentMusicDto = CommentMusicDto;
class CommentAlbumDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentAlbumDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentAlbumDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentAlbumDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentAlbumDto.prototype, "beforeTime", void 0);
exports.CommentAlbumDto = CommentAlbumDto;
class CommentPlayListDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentPlayListDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentPlayListDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentPlayListDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentPlayListDto.prototype, "beforeTime", void 0);
exports.CommentPlayListDto = CommentPlayListDto;
class CommentMvDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentMvDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentMvDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentMvDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentMvDto.prototype, "beforeTime", void 0);
exports.CommentMvDto = CommentMvDto;
class CommentDjDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentDjDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentDjDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentDjDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentDjDto.prototype, "beforeTime", void 0);
exports.CommentDjDto = CommentDjDto;
class CommentVideoDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentVideoDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentVideoDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentVideoDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentVideoDto.prototype, "beforeTime", void 0);
exports.CommentVideoDto = CommentVideoDto;
class CommentHotDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 音乐 id', required: true }),
    __metadata("design:type", String)
], CommentHotDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型: 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频', required: true }),
    __metadata("design:type", Number)
], CommentHotDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false }),
    __metadata("design:type", Number)
], CommentHotDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentHotDto.prototype, "offset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 }),
    __metadata("design:type", Number)
], CommentHotDto.prototype, "beforeTime", void 0);
exports.CommentHotDto = CommentHotDto;
class CommentLikeDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : 资源 id, 如歌曲 id,mv id', required: true }),
    __metadata("design:type", String)
], CommentLikeDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '评论 id ', required: true }),
    __metadata("design:type", String)
], CommentLikeDto.prototype, "cid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: ': 是否点赞 ,1 为点赞 ,0 为取消点赞', required: true }),
    __metadata("design:type", Number)
], CommentLikeDto.prototype, "t", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频, 6: 动态', required: true }),
    __metadata("design:type", Number)
], CommentLikeDto.prototype, "type", void 0);
exports.CommentLikeDto = CommentLikeDto;
class BannerDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'type:资源类型,对应以下类型,默认为 0 即PC ', default: 0, required: false }),
    __metadata("design:type", Number)
], BannerDto.prototype, "type", void 0);
exports.BannerDto = BannerDto;
class SongDetailsDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : ids: 音乐 id, 如 ids=347230 ', required: true }),
    __metadata("design:type", String)
], SongDetailsDto.prototype, "ids", void 0);
exports.SongDetailsDto = SongDetailsDto;
class AlbumDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true }),
    __metadata("design:type", String)
], AlbumDto.prototype, "id", void 0);
exports.AlbumDto = AlbumDto;
class AlbumDetailDynamicDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true }),
    __metadata("design:type", String)
], AlbumDetailDynamicDto.prototype, "id", void 0);
exports.AlbumDetailDynamicDto = AlbumDetailDynamicDto;
class AlbumSubDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 :id: 专辑 id ', required: true }),
    __metadata("design:type", String)
], AlbumSubDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 't : 1 为收藏,其他为取消收藏', required: true }),
    __metadata("design:type", Number)
], AlbumSubDto.prototype, "t", void 0);
exports.AlbumSubDto = AlbumSubDto;
class AlbumSubListDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '取出数量 , 默认为 25 ', default: 25, required: false }),
    __metadata("design:type", Number)
], AlbumSubListDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0', default: 0, required: false }),
    __metadata("design:type", Number)
], AlbumSubListDto.prototype, "offset", void 0);
exports.AlbumSubListDto = AlbumSubListDto;
class ArtistsDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : id: 歌手 id, 可由搜索接口获得', required: true }),
    __metadata("design:type", String)
], ArtistsDto.prototype, "id", void 0);
exports.ArtistsDto = ArtistsDto;
class ArtistsMvDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 :  id: 歌手 id, 可由搜索接口获得', required: true }),
    __metadata("design:type", String)
], ArtistsMvDto.prototype, "id", void 0);
exports.ArtistsMvDto = ArtistsMvDto;
class ArtistsAlbumDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : id', required: true }),
    __metadata("design:type", String)
], ArtistsAlbumDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '可选参数 : limit: 取出数量 , 默认为 50', default: 50, required: false }),
    __metadata("design:type", Number)
], ArtistsAlbumDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false }),
    __metadata("design:type", Number)
], ArtistsAlbumDto.prototype, "offset", void 0);
exports.ArtistsAlbumDto = ArtistsAlbumDto;
class ArtistsDescDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' 必选参数 : id', required: true }),
    __metadata("design:type", String)
], ArtistsDescDto.prototype, "id", void 0);
exports.ArtistsDescDto = ArtistsDescDto;
class SimiMvDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' 必选参数 : mvid', required: true }),
    __metadata("design:type", String)
], SimiMvDto.prototype, "mvid", void 0);
exports.SimiMvDto = SimiMvDto;
class SimiUserDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' 必选参数 : id', required: true }),
    __metadata("design:type", String)
], SimiUserDto.prototype, "id", void 0);
exports.SimiUserDto = SimiUserDto;
class dailySigninDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到', default: 0, required: false }),
    __metadata("design:type", Number)
], dailySigninDto.prototype, "type", void 0);
exports.dailySigninDto = dailySigninDto;
class LikeDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' 必选参数 : id', required: true }),
    __metadata("design:type", String)
], LikeDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: ' 可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢', required: false }),
    __metadata("design:type", Boolean)
], LikeDto.prototype, "like", void 0);
exports.LikeDto = LikeDto;
class LikeListDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : uid: 用户 id', required: true }),
    __metadata("design:type", String)
], LikeListDto.prototype, "uid", void 0);
exports.LikeListDto = LikeListDto;
class FmTrashDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: '必选参数 : id: 歌曲 id', required: true }),
    __metadata("design:type", String)
], FmTrashDto.prototype, "id", void 0);
exports.FmTrashDto = FmTrashDto;
class TopAlbumDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: ' limit: 取出数量 , 默认为 50', required: false, default: 50 }),
    __metadata("design:type", Number)
], TopAlbumDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false }),
    __metadata("design:type", Number)
], TopAlbumDto.prototype, "offset", void 0);
exports.TopAlbumDto = TopAlbumDto;
class ScrobbleDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'id: 歌曲 id', required: true }),
    __metadata("design:type", String)
], ScrobbleDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'sourceid: 歌单或专辑 id', required: true }),
    __metadata("design:type", String)
], ScrobbleDto.prototype, "sourceid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: ' time: 歌曲播放时间,单位为秒', required: false }),
    __metadata("design:type", Number)
], ScrobbleDto.prototype, "time", void 0);
exports.ScrobbleDto = ScrobbleDto;
class TopArtistsDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'limit: 取出数量 , 默认为 50', required: false, default: 50 }),
    __metadata("design:type", Number)
], TopArtistsDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false }),
    __metadata("design:type", Number)
], TopArtistsDto.prototype, "offset", void 0);
exports.TopArtistsDto = TopArtistsDto;
class MvAllDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 ', required: false, default: '' }),
    __metadata("design:type", String)
], MvAllDto.prototype, "area", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部', default: '', required: false }),
    __metadata("design:type", String)
], MvAllDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '排序,可选值为上升最快,最热,最新,不填则为上升最快', default: '', required: false }),
    __metadata("design:type", String)
], MvAllDto.prototype, "order", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '取出数量 , 默认为 50', required: false, default: 50 }),
    __metadata("design:type", Number)
], MvAllDto.prototype, "limit", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false }),
    __metadata("design:type", Number)
], MvAllDto.prototype, "offset", void 0);
exports.MvAllDto = MvAllDto;
class MvFirstDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部', required: false, default: '' }),
    __metadata("design:type", String)
], MvFirstDto.prototype, "area", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: '取出数量 , 默认为 50', required: false, default: 50 }),
    __metadata("design:type", Number)
], MvFirstDto.prototype, "limit", void 0);
exports.MvFirstDto = MvFirstDto;
//# sourceMappingURL=cloudmusic.dto.js.map