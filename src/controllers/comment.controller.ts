import { Controller, Inject, Get, Query } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import {
    CommentMusicDto,
    CommentAlbumDto,
    CommentPlayListDto,
    CommentMvDto,
    CommentDjDto,
    CommentVideoDto,
    CommentHotDto,
    CommentLikeDto
} from '../dto/comment.dto';

@ApiUseTags('评论')
@Controller('comment')
export class CommentController {
    constructor(@Inject(CommentService) private readonly commentService: CommentService) {
    }

    /***
    * 暂时不写
    */
    @ApiOperation({ title: '发送/删除评论', description: '说明 : 调用此接口,可发送评论或者删除评论' })
    @Get()
    async  comment() {
    }

    @ApiOperation({ title: '歌曲评论', description: '说明: 调用此接口, 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 ) 实例: /comment/music?id=186016&limit=1 对应晴天评论' })
    @Get('/music')
    async commentMusic(@Query() commentMusicDto: CommentMusicDto) {
        return await this.commentService.commentMusic(commentMusicDto);
    }

    @ApiOperation({ title: '专辑评论', description: '说明: 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 ) 实例: /comment/album?id=32311' })
    @Get('/album')
    async  commentAlbum(@Query() commentAlbum: CommentAlbumDto) {
        return await this.commentService.commentAlbum(commentAlbum);
    }

    @ApiOperation({ title: '歌单评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 ) , 实例: /comment/playlist?id=705123491' })
    @Get('/playlist')
    async  commentPlayList(@Query() commentPlayListDto: CommentPlayListDto) {
        return await this.commentService.commentPlayList(commentPlayListDto);
    }

    @ApiOperation({ title: 'mv 评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 ) 实例: /comment/mv?id=5436712' })
    @Get('/mv')
    async commentMv(@Query() commentMvDto: CommentMvDto) {
        return await this.commentService.commentMv(commentMvDto);
    }

    @ApiOperation({ title: '电台节目评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 ( 不需要登录 ) 实例: /comment/dj?id=794062371' })
    @Get('/dj')
    async  commentDj(@Query() commentDjDto: CommentDjDto) {
        return await this.commentService.commentDj(commentDjDto);
    }
    @ApiOperation({ title: '视频评论', description: '说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 ( 不需要登录 ) 实例: /comment/video?id=89ADDE33C0AAE8EC14B99F6750DB954D' })
    @Get('/video')
    async commentVideo(@Query() commentVideoDto: CommentVideoDto) {
        return await this.commentService.commentVideo(commentVideoDto);
    }
    // 以下dto有变化

    @ApiOperation({ title: '热门评论', description: '说明 : 调用此接口 , 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 ) 实例: /comment/hot?id=186016&type=0 ' })
    @Get('/hot')
    async commentHot(@Query() commentHotDto: CommentHotDto) {
        return await this.commentService.commentHot(commentHotDto);
    }

    /**
     *  后期在优化这个接口
     *  此接口需要进行登录
     * @param commentLikeDto 
     * 注意： 动态点赞不需要传入 id 参数，需要传入动态的 threadId 参数,
     * 如：/comment/like?type=6&cid=1419532712&threadId=A_EV_2_6559519868_32953014&t=0， 
     * threadId 可通过 /event，/user/event 接口获取
     * 
     */
    @ApiOperation({ title: '给评论点赞', description: '说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 ) 实例：/comment/like?id=29178366&cid=12840183&t=1&type=0 对应给 https://music.163.com/#/song?id=29178366 最热门的评论点赞' })
    @Get('/like')
    async commentLike(@Query() commentLikeDto: CommentLikeDto) {
        return await this.commentService.commentLike(commentLikeDto);
    }

}