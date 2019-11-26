import { Controller, Inject, Get, Query, HttpStatus } from '@nestjs/common';
import { CloudMusicService } from '../services/cloudmusic.service';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TopSongDto, BannerDto, SongDetailsDto, AlbumDto, AlbumDetailDynamicDto, AlbumSubDto, AlbumSubListDto, ArtistsDto, ArtistsMvDto, ArtistsAlbumDto, ArtistsDescDto, SimiMvDto, SimiUserDto, dailySigninDto, LikeDto, LikeListDto, FmTrashDto, TopAlbumDto, ScrobbleDto, TopArtistsDto, MvAllDto, MvFirstDto } from '../dto/cloudmusic.dto';
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

  @ApiOperation({ title: '获取专辑内容', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容 shil： /album?id=32311' })
  @Get('/album')
  async album(@Query() albumDto: AlbumDto) {
    return await this.cloudMusicService.album(albumDto);
  }

  @ApiOperation({ title: '专辑动态信息', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数, 实例：/album/detail/dynamic?id=32311' })
  @Get('/album/detail/dynamic')
  async  albumDetailDynamic(@Query() albumDetailDynamicDto: AlbumDetailDynamicDto) {
    return await this.cloudMusicService.albumDetailDynamic(albumDetailDynamicDto);
  }

  /**
   * 
   * @param 网易本身api有bug，接口专辑 id未传递
   */
  @ApiOperation({ title: '收藏/取消收藏专辑', description: '说明 : 调用此接口,可收藏/取消收藏专辑, 实例：/album/sub?id=xxx&t=1 /album/sub?id=xxx&t=0' })
  @Get('/album/sub')
  async  albumSub(@Query() albumSubDto: AlbumSubDto) {
    return await this.cloudMusicService.albumSub(albumSubDto);
  }

  @ApiOperation({ title: '获取已收藏专辑列表', description: '说明 : 调用此接口 , 可获得已收藏专辑列表,（需要登录） 实例： /album/sublist ' })
  @Get('/album/sublist')
  async albumSubList(@Query() albumSubListDto: AlbumSubListDto) {
    return await this.cloudMusicService.albumSubList(albumSubListDto);
  }

  @ApiOperation({ title: '获取歌手单曲', description: '说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲 实例：/artists?id=6452 ' })
  @Get('/artists')
  async artists(@Query() artistsDto: ArtistsDto) {
    return await this.cloudMusicService.artists(artistsDto);
  }

  @ApiOperation({ title: '获取歌手 mv', description: '说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064' })
  @Get('/artists/mv')
  async artistsMv(@Query() artistsMvDto: ArtistsMvDto) {
    return await this.cloudMusicService.artistsMv(artistsMvDto);
  }

  @ApiOperation({ title: '获取歌手专辑', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容， 实例: /artist/album?id=6452&limit=30 ( 周杰伦 )' })
  @Get('/artist/album')
  async artistAlbum(@Query() artistsAlbumDto: ArtistsAlbumDto) {
    return await this.cloudMusicService.artistsAlbum(artistsAlbumDto);
  }

  @ApiOperation({ title: '获取歌手描述', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述 实例：  /artist/desc?id=6452 ( 周杰伦 )' })
  @Get('/artist/desc')
  async artistDesc(@Query() artistsDescDto: ArtistsDescDto) {
    return await this.cloudMusicService.artistDesc(artistsDescDto);
  }

  @ApiOperation({ title: '获取相似歌手', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手 (需要登录) 实例： /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )' })
  @Get('/simi/artist')
  async simiArtist(@Query() artistsDescDto: ArtistsDescDto) {
    return await this.cloudMusicService.simiArtist(artistsDescDto);
  }

  @ApiOperation({ title: '获取相似歌单', description: ' 说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单 实例： /simi/playlist?id=347230 ( 对应 光辉岁月  相似歌单 )' })
  @Get('/simi/playlist')
  async simiPlaylist(@Query() artistsDescDto: ArtistsDescDto) {
    return await this.cloudMusicService.simiPlaylist(artistsDescDto);
  }

  @ApiOperation({ title: '相似 mv', description: '说明 : 调用此接口 , 传入 mvid 可获取相似 mv 实例： /simi/mv?mvid=5436712 ' })
  @Get('/simi/mv')
  async simiMv(@Query() simiMvDto: SimiMvDto) {
    return await this.cloudMusicService.simiMv(simiMvDto);
  }

  @ApiOperation({ title: '获取相似音乐', description: '说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲  实例： /simi/song?id=347230' })
  @Get('/simi/song')
  async simiSong(@Query() simiSongDto: ArtistsDescDto) {
    return await this.cloudMusicService.simiSong(simiSongDto);
  }

  @ApiOperation({ title: '获取最近 5 个听了这首歌的用户', description: '说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户 实例/simi/user?id=347230 ( 对应  光辉岁月  相似歌曲 )' })
  @Get('/simi/user')
  async simiUser(@Query() simiUserDto: SimiUserDto) {
    return await this.cloudMusicService.simiUser(simiUserDto);
  }

  @ApiOperation({ title: '获取每日推荐歌单', description: '说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )  实例 /recommend/resource ' })
  @Get('/recommend/resource')
  async recommendResource() {
    return await this.cloudMusicService.recommendResource();
  }

  @ApiOperation({ title: '获取每日推荐歌曲', description: '说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 ) 实例  /recommend/songs' })
  @Get('/recommend/songs')
  async recommendSongs() {
    return await this.cloudMusicService.recommendSongs();
  }

  @ApiOperation({ title: '私人 FM', description: '说明 : 私人 FM( 需要登录 ) 实例 /personal_fm' })
  @Get('/personal_fm')
  async personalFm() {
    return await this.cloudMusicService.personalFm();
  }

  @ApiOperation({ title: '签到', description: ' 说明 : 调用此接口 , 传入签到类型 ( 可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 ), 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验 实例 /daily_signin' })
  @Get('/daily_signin')
  async dailySignin(@Query() dailySigninDto: dailySigninDto) {
    return await this.cloudMusicService.dailySignin(dailySigninDto);
  }

  @ApiOperation({ title: '喜欢音乐', description: ' 说明 :  调用此接口 , 传入音乐 id, 可喜欢该音乐 实例  /like?id=347230' })
  @Get('/like')
  async like(@Query() likeDto: LikeDto) {
    return await this.cloudMusicService.like(likeDto);
  }

  @ApiOperation({ title: '喜欢音乐列表', description: '说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组) (需要登录) 实例：/likelist?uid=32953014' })
  @Get('/likelist')
  async  likeLsit(@Query() likeListDto: LikeListDto) {
    return await this.cloudMusicService.likeList(likeListDto);
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

  @ApiOperation({ title: '最新专辑', description: '说明 : 调用此接口 ，获取云音乐首页新碟上架数据 实例： /album/newest' })
  @Get('/album/newest')
  async  albumNewest() {
    return await this.cloudMusicService.albumNewest();
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

  @ApiOperation({ title: '全部 mv', description: '说明 : 调用此接口 , 可获取全部 mv 实例：  /mv/all?area=韩国&order=最热&limit=1' })
  @Get('/mv/all')
  async mvAll(@Query() mvAllDto: MvAllDto) {
    return await this.cloudMusicService.mvAll(mvAllDto);
  }

  @ApiOperation({ title: '最新 mv', description: '说明 : 调用此接口 , 可获取最新 mv 实例: /mv/first?limit=10' })
  @Get('/mv/first')
  async mvFirst(@Query() mvFirstDto: MvFirstDto) {
    return await this.cloudMusicService.mvFirst(mvFirstDto);
  }
}
