import { Controller, Inject, Query, Get } from '@nestjs/common';
import { MvService } from '../services/mv.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TopDetailDto } from '../dto/cloudmusic.dto';
import { MvExclusiveRcmd, MvFirstDto, MvAllDto, MvUrlDto } from '../dto/mv.dto';
@ApiTags('MV')
@Controller('mv')
export class MvController {
    constructor(@Inject(MvService) private readonly mvService: MvService) {
    }

    @ApiOperation({ summary: '全部 mv', description: '说明 : 调用此接口 , 可获取全部 mv 实例：  /mv/all?area=韩国&order=最热&limit=1' })
    @Get('/all')
    async mvAll(@Query() mvAllDto: MvAllDto) {
        return await this.mvService.mvAll(mvAllDto);
    }

    @ApiOperation({ summary: '最新 mv', description: '说明 : 调用此接口 , 可获取最新 mv 实例: /mv/first?limit=10' })
    @Get('/first')
    async mvFirst(@Query() mvFirstDto: MvFirstDto) {
        return await this.mvService.mvFirst(mvFirstDto);
    }

    /**
     * 此接口应该是网易报错 
     * @param mvExclusiveRcmdDto 
     */
    @ApiOperation({ summary: '网易出品mv', description: '说明 : 调用此接口 , 可获取网易出品 mv 实例：/mv/exclusive/rcmd?limit=10 ' })
    @Get('/exclusive/rcmd')
    async mvExclusiveRcmd(@Query() mvExclusiveRcmdDto: MvExclusiveRcmd) {
        return await this.mvService.mvExclusiveRcmd(mvExclusiveRcmdDto);
    }

    /**
   * 
   * @param topDetailDto 应该是有问题的
   */
  @ApiOperation({ summary: '获取 mv 数据', description: '说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用  mv 地址 接口 实例：/top/mv?limit=10' })
  @Get('/detail')
  async topDetail(@Query() topDetailDto: TopDetailDto) {
    return await this.mvService.topDetail(topDetailDto);
  }

  @ApiOperation({ summary: 'mv 地址', description: '说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址 实例：/mv/url?id=5436712' })
  @Get('/url')
  async mvUrl(@Query() mvUrlDto: MvUrlDto) {
    return await this.mvService.mvUrl(mvUrlDto);
  }
}