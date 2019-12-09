import { ApiModelProperty } from '@nestjs/swagger';

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
