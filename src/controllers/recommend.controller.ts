import { Inject, Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RecommendService } from '../services/recommend.service';

@ApiTags('推荐')
@Controller('recommend')
export class recommendController {
  constructor(
    @Inject(RecommendService)
    private readonly recommendService: RecommendService,
  ) {}

  @ApiOperation({
    summary: '获取每日推荐歌单',
    description:
      '说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )  实例 /recommend/resource ',
  })
  @Get('/resource')
  async recommendResource() {
    return await this.recommendService.recommendResource();
  }

  @ApiOperation({
    summary: '获取每日推荐歌曲',
    description:
      '说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 ) 实例  /recommend/songs',
  })
  @Get('/songs')
  async recommendSongs() {
    return await this.recommendService.recommendSongs();
  }
}
