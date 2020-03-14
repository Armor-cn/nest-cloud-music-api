import { Controller, Inject, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SimiService } from '../services/simi.service';
import {  SimiUserDto, SimiMvDto } from '../dto/simi.dto';
import { ArtistsDescDto } from '../dto/artists.dto';
@ApiTags('相似')
@Controller('simi')
export class SimiController {
    constructor(@Inject(SimiService) private readonly simiService: SimiService) {
    }
    @ApiOperation({ summary: '获取相似歌手', description: ' 说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手 (需要登录) 实例： /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )' })
    @Get('/artist')
    async simiArtist(@Query() artistsDescDto: ArtistsDescDto) {
        return await this.simiService.simiArtist(artistsDescDto);
    }

    @ApiOperation({ summary: '获取相似歌单', description: ' 说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单 实例： /simi/playlist?id=347230 ( 对应 光辉岁月  相似歌单 )' })
    @Get('/playlist')
    async simiPlaylist(@Query() artistsDescDto: ArtistsDescDto) {
        return await this.simiService.simiPlaylist(artistsDescDto);
    }

    @ApiOperation({ summary: '相似 mv', description: '说明 : 调用此接口 , 传入 mvid 可获取相似 mv 实例： /simi/mv?mvid=5436712 ' })
    @Get('/mv')
    async simiMv(@Query() simiMvDto: SimiMvDto) {
        return await this.simiService.simiMv(simiMvDto);
    }

    @ApiOperation({ summary: '获取相似音乐', description: '说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲  实例： /simi/song?id=347230' })
    @Get('/song')
    async simiSong(@Query() simiSongDto: ArtistsDescDto) {
        return await this.simiService.simiSong(simiSongDto);
    }

    @ApiOperation({ summary: '获取最近 5 个听了这首歌的用户', description: '说明 : 调用此接口 , 传入歌曲 id, 最近 5 个听了这首歌的用户 实例/simi/user?id=347230 ( 对应  光辉岁月  相似歌曲 )' })
    @Get('/user')
    async simiUser(@Query() simiUserDto: SimiUserDto) {
        return await this.simiService.simiUser(simiUserDto);
    }

}