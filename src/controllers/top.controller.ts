import { Controller, Inject, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TopService } from 'src/services/top.service';
import { TopSongDto, TopAlbumDto, TopArtistsDto, TopMvDto } from 'src/dto/cloudmusic.dto';
import { TopSongAttribute } from 'src/attribute/cloudmusic.attribute';

@ApiUseTags('top')
@Controller('top')
export class TopController {
    constructor(@Inject(TopService) private readonly topService: TopService) {
    }
    @ApiOperation({ title: '新歌速递', description: '调用此接口, 可获取新歌速递，实例: /top/song?type=0' })
    @ApiResponse({ status: HttpStatus.OK, type: TopSongDto, description: 'type' })
    @ApiResponse({ status: 201, type: [TopSongAttribute] })
    @Get('/song')
    async topSong(@Query() topSongDto: TopSongDto) {
        return await this.topService.topSong(topSongDto);
    }

    @ApiOperation({ title: '新碟上架', description: '说明 : 调用此接口 , 可获取新碟上架列表, 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30 ,本接口实例： /top/album?offset=0&limit=30' })
    @Get('/album')
    async  topAlbum(@Query() topAlbumDto: TopAlbumDto) {
        return await this.topService.topAlbum(topAlbumDto);
    }

    @ApiOperation({ title: '热门歌手', description: ' 说明 : 调用此接口 , 可获取热门歌手数据 实例： /top/artists?offset=0&limit=30' })
    @Get('/artists')
    async  topArtists(@Query() topArtistsDto: TopArtistsDto) {
        return await this.topService.topArtists(topArtistsDto);
    }

    @ApiOperation({ title: 'mv 排行', description: '说明 : 调用此接口 , 可获取 mv 排行 实例：/top/mv?limit=10' })
    @Get('/mv')
    async topMv(@Query() topMvDto: TopMvDto) {
        return await this.topService.topMv(topMvDto);
    }
}