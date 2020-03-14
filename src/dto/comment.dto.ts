import { ApiProperty } from '@nestjs/swagger';

export class CommentMusicDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentAlbumDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentPlayListDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentMvDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentDjDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentVideoDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentHotDto {
    @ApiProperty({ description: '必传参数 : 音乐 id', required: true })
    id: string;
    @ApiProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型: 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频', required: true })
    type: number;
    @ApiProperty({ description: 'limit: 取出评论数量 , 默认为 20', default: 20, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值', required: false, default: 0 })
    offset: number;
    @ApiProperty({ description: '分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到', required: false, default: 0 })
    beforeTime: number;
}

export class CommentLikeDto {

    @ApiProperty({ description: '必传参数 : 资源 id, 如歌曲 id,mv id', required: true })
    id: string;
    @ApiProperty({ description: '评论 id ', required: true })
    cid: string;
    @ApiProperty({ description: ': 是否点赞 ,1 为点赞 ,0 为取消点赞', required: true })
    t: number;
    @ApiProperty({ description: '必传参数 : tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频, 6: 动态', required: true })
    type: number;
}
