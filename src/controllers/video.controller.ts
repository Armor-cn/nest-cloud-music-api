import { Controller, Inject, Get, Query } from '@nestjs/common';
import { VideoService } from '../services/video.service';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { VideoGroupDto } from '../dto/video.dto';

@ApiUseTags('视频')
@Controller('video')
export class VideoController {
    constructor(@Inject(VideoService) private readonly videoService: VideoService) {
    }

    /**
    * 本身借口报错
    */
    @ApiOperation({ title: '获取视频标签列表', description: '说明 : 调用此接口 , 可获取视频标签列表, 实例： /video/group/list' })
    @Get('/group/list')
    async videoGroupList() {
        return await this.videoService.videoGroupList();
    }

    @ApiOperation({ title: '获取视频标签下的视频', description: '说明 : 调用此接口 ,传 入id,可获取到相关的视频,无法分页，每次请求返回内容都不一样，官方桌面软件是打开先请求两次，然后每次滚动到底部的时候再请求一次（需要登录）, 实例： /video/group?id=9104' })
    @Get('/group')
    async videoGroup(@Query() videoGroupDto: VideoGroupDto) {
        return await this.videoService.videoGroup(videoGroupDto);
    }
}