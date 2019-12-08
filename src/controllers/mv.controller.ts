import { Controller, Inject, Query, Get } from '@nestjs/common';
import { MvService } from '../services/mv.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { MvExclusiveRcmd, MvFirstDto, MvAllDto } from '../dto/cloudmusic.dto';

@ApiUseTags('MV')
@Controller('mv')
export class MvController {
    constructor(@Inject(MvService) private readonly mvService: MvService) {
    }

    @ApiOperation({ title: '全部 mv', description: '说明 : 调用此接口 , 可获取全部 mv 实例：  /mv/all?area=韩国&order=最热&limit=1' })
    @Get('/all')
    async mvAll(@Query() mvAllDto: MvAllDto) {
        return await this.mvService.mvAll(mvAllDto);
    }

    @ApiOperation({ title: '最新 mv', description: '说明 : 调用此接口 , 可获取最新 mv 实例: /mv/first?limit=10' })
    @Get('/first')
    async mvFirst(@Query() mvFirstDto: MvFirstDto) {
        return await this.mvService.mvFirst(mvFirstDto);
    }

    /**
     * 此接口应该是网易报错 
     * @param mvExclusiveRcmdDto 
     */
    @ApiOperation({ title: '网易出品mv', description: '说明 : 调用此接口 , 可获取网易出品 mv 实例：/mv/exclusive/rcmd?limit=10 ' })
    @Get('/exclusive/rcmd')
    async mvExclusiveRcmd(@Query() mvExclusiveRcmdDto: MvExclusiveRcmd) {
        return await this.mvService.mvExclusiveRcmd(mvExclusiveRcmdDto);
    }
}