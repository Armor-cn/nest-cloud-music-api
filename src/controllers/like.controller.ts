import { Controller, Inject, Get, Query } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { LikeService } from '../services/like.service';
import { LikeDto, LikeListDto } from '../dto/like.dto';

@ApiUseTags('喜欢')
@Controller('like')
export class LikeController {
    constructor(@Inject(LikeService) private readonly likeService: LikeService) {
    }
    @ApiOperation({ title: '喜欢音乐', description: ' 说明 :  调用此接口 , 传入音乐 id, 可喜欢该音乐 实例  /like?id=347230' })
    @Get()
    async like(@Query() likeDto: LikeDto) {
        return await this.likeService.like(likeDto);
    }

    @ApiOperation({ title: '喜欢音乐列表', description: '说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组) (需要登录) 实例：/like/list?uid=32953014' })
    @Get('/list')
    async  likeLsit(@Query() likeListDto: LikeListDto) {
        return await this.likeService.likeList(likeListDto);
    }
}