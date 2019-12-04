import { ApiModelProperty } from '@nestjs/swagger';

/**
 * 网易云音乐Api Dto
 */
export class TopSongDto {
    @ApiModelProperty({ description: '必选参数 :type: 地区类型 id, 对应以下: 全部:0，华语:7，欧美:96，日本:8，韩国:16', required: true, default: 0 })
    type: number;
}

export class CommentMusicDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentAlbumDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentPlayListDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentMvDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentDjDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentVideoDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentHotDto {
    @ApiModelProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiModelProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型: 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频', required: true })
    type: number;
    @ApiModelProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiModelProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentLikeDto {

    @ApiModelProperty({ description: '必传参数 : 资源 id, 如歌曲 id,mv id', required: true })
    id: string;
    @ApiModelProperty({ description: '评论 id ', required: true })
    cid: string;
    @ApiModelProperty({ description: ': 是否点赞 ,1 为点赞 ,0 为取消点赞', required: true })
    t: number;
    @ApiModelProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频, 6: 动态', required: true })
    type: number;
}

export class BannerDto {
    @ApiModelProperty({ description: 'type:资源类型,对应以下类型,默认为 0 即PC ', default: 0, required: false })
    type: number;
}

export class SongDetailsDto {
    @ApiModelProperty({ description: '必选参数 : ids: 音乐 id, 如 ids=347230 ', required: true })
    ids: string;
}

export class AlbumDto {
    @ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true })
    id: string;
}

export class AlbumDetailDynamicDto {
    @ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true })
    id: string;
}

export class AlbumSubDto {
    @ApiModelProperty({ description: '必选参数 :id: 专辑 id ', required: true })
    id: string;
    @ApiModelProperty({ description: 't : 1 为收藏,其他为取消收藏', required: true })
    t: number;
}

export class AlbumSubListDto {
    @ApiModelProperty({ description: '取出数量 , 默认为 25 ', default: 25, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class ArtistsDto {
    @ApiModelProperty({ description: '必选参数 : id: 歌手 id, 可由搜索接口获得', required: true })
    id: string;
}

export class ArtistsMvDto {
    @ApiModelProperty({ description: '必选参数 :  id: 歌手 id, 可由搜索接口获得', required: true })
    id: string;
}

export class ArtistsAlbumDto {
    @ApiModelProperty({ description: '必选参数 : id', required: true })
    id: string;
    @ApiModelProperty({ description: '可选参数 : limit: 取出数量 , 默认为 50', default: 50, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class ArtistsDescDto {
    @ApiModelProperty({ description: ' 必选参数 : id', required: true })
    id: string;
}

export class SimiMvDto {
    @ApiModelProperty({ description: ' 必选参数 : mvid', required: true })
    mvid: string;
}

export class SimiUserDto {
    @ApiModelProperty({ description: ' 必选参数 : id', required: true })
    id: string;
}

export class DailySigninDto {
    @ApiModelProperty({ description: ' type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到', default: 0, required: false })
    type: number;
}

export class LikeDto {
    @ApiModelProperty({ description: ' 必选参数 : id', required: true })
    id: string;
    @ApiModelProperty({ description: ' 可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢', required: false })
    like: boolean;
}

export class LikeListDto {
    @ApiModelProperty({ description: '必选参数 : uid: 用户 id', required: true })
    uid: string;
}

export class FmTrashDto {
    @ApiModelProperty({ description: '必选参数 : id: 歌曲 id', required: true })
    id: string;
}

export class TopAlbumDto {
    @ApiModelProperty({ description: ' limit: 取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class ScrobbleDto {
    @ApiModelProperty({ description: 'id: 歌曲 id', required: true })
    id: string;
    @ApiModelProperty({ description: 'sourceid: 歌单或专辑 id', required: true })
    sourceid: string;
    @ApiModelProperty({ description: ' time: 歌曲播放时间,单位为秒', required: false })
    time: number;
}
export class TopArtistsDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class MvAllDto {
    @ApiModelProperty({ description: 'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 ', required: false, default: '' })
    area: string;
    @ApiModelProperty({ description: 'type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部', default: '', required: false })
    type: string;
    @ApiModelProperty({ description: '排序,可选值为上升最快,最热,最新,不填则为上升最快', default: '', required: false })
    order: string;
    @ApiModelProperty({ description: '取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class MvFirstDto {
    @ApiModelProperty({ description: 'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部', required: false, default: '' })
    area: string;
    @ApiModelProperty({ description: '取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
}

export class MvExclusiveRcmd {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0', required: false, default: 0 })
    offset: number;
}

export class PersonalizedDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 30', required: false, default: 30 })
    limit: number;
}

export class TopMvDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 30', required: false, default: 30 })
    limit: number;
    @ApiModelProperty({ description: 'area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部', required: false, default: '' })
    area: string;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0', required: false, default: 0 })
    offset: number;
}

export class TopDetailDto {
    @ApiModelProperty({ description: ' 必选参数 : mvid: mv 的 id', required: true })
    mvid: string;
}

export class MvUrlDto {
    @ApiModelProperty({ description: ' 可选参数 : id: mv id', required: false })
    id: string;
}

export class VideoGroupDto {
    @ApiModelProperty({ description: ' 必选参数 : id: videoGroup 的 id', required: true })
    id: string;
}

export class RelatedAllvideoDto {
    @ApiModelProperty({ description: ' 必选参数 : id: 视频 的 id', required: true })
    id: string;
}
