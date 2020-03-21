import { Controller, Get, Query, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from '../dto/search.dto';
import { SearchService } from 'src/services/search.service';
@ApiTags('音乐搜索')
@Controller()
export class SearchController {
  constructor(
    @Inject(SearchService) private readonly searchService: SearchService,
  ) {}
  @ApiOperation({
    summary: '搜索',
    description:
      '说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 ,关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接 实例：/search?keywords= 海阔天空',
  })
  @Get('/search')
  async search(@Query() searchDto: SearchDto) {
    return await this.searchService.search(searchDto);
  }
}
