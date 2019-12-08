import { Controller, Inject, Get, Query, HttpStatus } from '@nestjs/common';
import { CloudMusicService } from '../services/cloudmusic.service';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  TopSongDto, BannerDto, SongDetailsDto,  DailySigninDto, LikeDto, LikeListDto,
  FmTrashDto, TopAlbumDto, ScrobbleDto, TopArtistsDto, MvAllDto, MvFirstDto,
  MvExclusiveRcmd, PersonalizedDto, TopMvDto, TopDetailDto, MvUrlDto, VideoGroupDto, RelatedAllvideoDto
} from '../dto/cloudmusic.dto';
import { TopSongAttribute } from '../attribute/cloudmusic.attribute';

@ApiUseTags('网易云音乐Api')
@Controller()
export class CloudMusicController {
  constructor(@Inject(CloudMusicService) private readonly cloudMusicService: CloudMusicService) {
  }
  @ApiOperation({ title: '新歌速递', description: '调用此接口, 可获取新歌速递，实例: /top/song?type=0' })
  @ApiResponse({ status: HttpStatus.OK, type: TopSongDto, description: 'type' })
  @ApiResponse({ status: 201, type: [TopSongAttribute] })
  @Get('/top/song')
  async topSong(@Query() topSongDto: TopSongDto) {
    return await this.cloudMusicService.topSong(topSongDto);
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

  @ApiOperation({ title: '新碟上架', description: '说明 : 调用此接口 , 可获取新碟上架列表, 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30 ,本接口实例： /top/album?offset=0&limit=30' })
  @Get('/top/album')
  async  topAlbum(@Query() topAlbumDto: TopAlbumDto) {
    return await this.cloudMusicService.topAlbum(topAlbumDto);
  }



  @ApiOperation({ title: '听歌打卡', description: '说明 : 调用此接口 , 传入音乐 id, 来源 id，歌曲时间 time，更新听歌排行数据 实例： /scrobble?id=518066366&sourceid=36780169&time=291' })
  @Get('/scrobble')
  async  scrobble(@Query() scrobbleDto: ScrobbleDto) {
    return await this.cloudMusicService.scrobble(scrobbleDto);
  }

  @ApiOperation({ title: '热门歌手', description: ' 说明 : 调用此接口 , 可获取热门歌手数据 实例： /top/artists?offset=0&limit=30' })
  @Get('/top/artists')
  async  topArtists(@Query() topArtistsDto: TopArtistsDto) {
    return await this.cloudMusicService.topArtists(topArtistsDto);
  }


  @ApiOperation({ title: '推荐节目', description: '说明 : 调用此接口 , 可获取推荐电台 实例：/program/recommend' })
  @Get('/program/recommend')
  async programRecommend() {
    return await this.cloudMusicService.programRecommend();
  }

  @ApiOperation({ title: '独家放送', description: ' 说明 : 调用此接口 , 可获取独家放送 实例：/personalized/privatecontent' })
  @Get('/personalized/privatecontent')
  async personalizedPrivatecontent() {
    return await this.cloudMusicService.personalizedPrivatecontent();
  }

  @ApiOperation({ title: 'mv 排行', description: '说明 : 调用此接口 , 可获取 mv 排行 实例：/top/mv?limit=10' })
  @Get('/top/mv')
  async topMv(@Query() topMvDto: TopMvDto) {
    return await this.cloudMusicService.topMv(topMvDto);
  }

  /**
   * 
   * @param topDetailDto 应该是有问题的
   */
  @ApiOperation({ title: '获取 mv 数据', description: '说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用  mv 地址 接口 实例：/top/mv?limit=10' })
  @Get('/mv/detail')
  async topDetail(@Query() topDetailDto: TopDetailDto) {
    return await this.cloudMusicService.topDetail(topDetailDto);
  }

  @ApiOperation({ title: 'mv 地址', description: '说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址 实例：/mv/url?id=5436712' })
  @Get('/mv/url')
  async mvUrl(@Query() mvUrlDto: MvUrlDto) {
    return await this.cloudMusicService.mvUrl(mvUrlDto);
  }

  /**
   * 本身借口报错
   */
  @ApiOperation({ title: '获取视频标签列表', description: '说明 : 调用此接口 , 可获取视频标签列表, 实例： /video/group/list' })
  @Get('/video/group/list')
  async videoGroupList() {
    return await this.cloudMusicService.videoGroupList();
  }

  @ApiOperation({ title: '获取视频标签下的视频', description: '说明 : 调用此接口 ,传 入id,可获取到相关的视频,无法分页，每次请求返回内容都不一样，官方桌面软件是打开先请求两次，然后每次滚动到底部的时候再请求一次（需要登录）, 实例： /video/group?id=9104' })
  @Get('/video/group')
  async videoGroup(@Query() videoGroupDto: VideoGroupDto) {
    return await this.cloudMusicService.videoGroup(videoGroupDto);
  }

  @ApiOperation({ title: '相关视频', description: '说明 : 调用此接口 , 可获取相关视频, 实例： /related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D' })
  @Get('/related/allvideo')
  async relatedAllvideo(@Query() relatedAllvideoDto: RelatedAllvideoDto) {
    return await this.cloudMusicService.relatedAllvideo(relatedAllvideoDto);
  }

}
