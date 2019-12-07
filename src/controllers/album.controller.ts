import { Controller, Inject, Get, Query } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AlbumService } from 'src/services/album.service';
import { AlbumDto, AlbumSubDto, AlbumSubListDto, AlbumDetailDynamicDto } from 'src/dto/cloudmusic.dto';

@ApiUseTags('专辑')
@Controller('album')
export class AlbumController {
    constructor(@Inject(AlbumService) private readonly albumService: AlbumService) {
    }

    @ApiOperation({ title: '获取专辑内容', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容 shil： /album?id=32311' })
    @Get('/album')
    async album(@Query() albumDto: AlbumDto) {
        return await this.albumService.album(albumDto);
    }

    @ApiOperation({ title: '专辑动态信息', description: '说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数, 实例：/album/detail/dynamic?id=32311' })
    @Get('/album/detail/dynamic')
    async  albumDetailDynamic(@Query() albumDetailDynamicDto: AlbumDetailDynamicDto) {
        return await this.albumService.albumDetailDynamic(albumDetailDynamicDto);
    }

    /**
   * 
   * @param 网易本身api有bug，接口专辑 id未传递
   */
    @ApiOperation({ title: '收藏/取消收藏专辑', description: '说明 : 调用此接口,可收藏/取消收藏专辑, 实例：/album/sub?id=xxx&t=1 /album/sub?id=xxx&t=0' })
    @Get('/album/sub')
    async  albumSub(@Query() albumSubDto: AlbumSubDto) {
        return await this.albumService.albumSub(albumSubDto);
    }

    @ApiOperation({ title: '获取已收藏专辑列表', description: '说明 : 调用此接口 , 可获得已收藏专辑列表,（需要登录） 实例： /album/sublist ' })
    @Get('/album/sublist')
    async albumSubList(@Query() albumSubListDto: AlbumSubListDto) {
        return await this.albumService.albumSubList(albumSubListDto);
    }

    @ApiOperation({ title: '最新专辑', description: '说明 : 调用此接口 ，获取云音乐首页新碟上架数据 实例： /album/newest' })
    @Get('/album/newest')
    async  albumNewest() {
        return await this.albumService.albumNewest();
    }

}