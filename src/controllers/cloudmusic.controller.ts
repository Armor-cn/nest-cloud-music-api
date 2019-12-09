import { Controller, Inject, Get, Query } from '@nestjs/common';
import { CloudMusicService } from '../services/cloudmusic.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import {
  BannerDto, SongDetailsDto, DailySigninDto,
  FmTrashDto, ScrobbleDto, RelatedAllvideoDto
} from '../dto/cloudmusic.dto';

@ApiUseTags()
@Controller()
export class CloudMusicController {
  constructor(@Inject(CloudMusicService) private readonly cloudMusicService: CloudMusicService) {
  }

  @ApiOperation({ title: 'banner', description: '说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据  实例 : /banner, /banner?type=2' })
  @Get('/banner')
  async  banner(@Query() bannerDto: BannerDto) {
    return await this.cloudMusicService.banner(bannerDto);
  }

  @ApiOperation({ title: '资源点赞( MV,电台,视频)', description: '说明 : 调用此接口 , 可对 MV,电台,视频点赞 实例： /resource/like?t=1&type=1&id=5436712' })
  @Get('/resource/like')
  async resourceLike() {
  }

  @ApiOperation({ title: '获取歌曲详情', description: ' 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取) 实例: /song/detail?ids=347230,/song/detail?ids=347230,347231' })
  @Get('/song/detail')
  async songDetails(@Query() songDetailsDto: SongDetailsDto) {
    return await this.cloudMusicService.songDetails(songDetailsDto);
  }

  @ApiOperation({ title: '私人 FM', description: '说明 : 私人 FM( 需要登录 ) 实例 /personal_fm' })
  @Get('/personal_fm')
  async personalFm() {
    return await this.cloudMusicService.personalFm();
  }

  @ApiOperation({ title: '签到', description: ' 说明 : 调用此接口 , 传入签到类型 ( 可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 ), 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验 实例 /daily_signin' })
  @Get('/daily_signin')
  async dailySignin(@Query() dailySigninDto: DailySigninDto) {
    return await this.cloudMusicService.dailySignin(dailySigninDto);
  }

  @ApiOperation({ title: '垃圾桶', description: '说明 : 调用此接口 , 传入音乐 id, 可把该音乐从私人 FM 中移除至垃圾桶 (需要登录) 实例：/fm_trash?id=347230' })
  @Get('/fm_trash')
  async  fmTrash(@Query() fmTrashDto: FmTrashDto) {
    return await this.cloudMusicService.fmTrash(fmTrashDto);
  }

  @ApiOperation({ title: '听歌打卡', description: '说明 : 调用此接口 , 传入音乐 id, 来源 id，歌曲时间 time，更新听歌排行数据 实例： /scrobble?id=518066366&sourceid=36780169&time=291' })
  @Get('/scrobble')
  async  scrobble(@Query() scrobbleDto: ScrobbleDto) {
    return await this.cloudMusicService.scrobble(scrobbleDto);
  }

  @ApiOperation({ title: '推荐节目', description: '说明 : 调用此接口 , 可获取推荐电台 实例：/program/recommend' })
  @Get('/program/recommend')
  async programRecommend() {
    return await this.cloudMusicService.programRecommend();
  }

  @ApiOperation({ title: '相关视频', description: '说明 : 调用此接口 , 可获取相关视频, 实例： /related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D' })
  @Get('/related/allvideo')
  async relatedAllvideo(@Query() relatedAllvideoDto: RelatedAllvideoDto) {
    return await this.cloudMusicService.relatedAllvideo(relatedAllvideoDto);
  }

}
