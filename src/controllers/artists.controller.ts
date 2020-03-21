import { Controller, Inject, Get, Query } from '@nestjs/common';
import { ArtistsService } from '../services/artists.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  ArtistsDto,
  ArtistsAlbumDto,
  ArtistsMvDto,
  ArtistsDescDto,
} from '../dto/artists.dto';

@ApiTags('歌手')
@Controller('artists')
export class ArtistsController {
  constructor(
    @Inject(ArtistsService) private readonly artistsService: ArtistsService,
  ) {}

  @ApiOperation({
    summary: '获取歌手单曲',
    description:
      '说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲 实例：/artists?id=6452 ',
  })
  @Get()
  async artists(@Query() artistsDto: ArtistsDto) {
    return await this.artistsService.artists(artistsDto);
  }

  @ApiOperation({
    summary: '获取歌手 mv',
    description:
      '说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064',
  })
  @Get('/mv')
  async artistsMv(@Query() artistsMvDto: ArtistsMvDto) {
    return await this.artistsService.artistsMv(artistsMvDto);
  }

  @ApiOperation({
    summary: '获取歌手专辑',
    description:
      ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容， 实例: /artist/album?id=6452&limit=30 ( 周杰伦 )',
  })
  @Get('/album')
  async artistAlbum(@Query() artistsAlbumDto: ArtistsAlbumDto) {
    return await this.artistsService.artistsAlbum(artistsAlbumDto);
  }

  @ApiOperation({
    summary: '获取歌手描述',
    description:
      ' 说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述 实例：  /artist/desc?id=6452 ( 周杰伦 )',
  })
  @Get('/desc')
  async artistDesc(@Query() artistsDescDto: ArtistsDescDto) {
    return await this.artistsService.artistDesc(artistsDescDto);
  }
}
