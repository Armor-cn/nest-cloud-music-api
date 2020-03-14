import { Controller, Get, Query, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PersonalizedDto } from '../dto/personalized.dto';
import { PersonalizedService } from '../services/personalized.service';

@ApiTags('推荐')
@Controller('personalized')
export class PersonalizedController {
    constructor(@Inject(PersonalizedService) private readonly personalizedService: PersonalizedService) {
    }
    @ApiOperation({ summary: '推荐歌单', description: '说明 : 调用此接口 , 可获取推荐歌单 实例： /personalized?limit=1' })
    @Get()
    async personalized(@Query() personalizedDto: PersonalizedDto) {
        return await this.personalizedService.personalized(personalizedDto);
    }

    @ApiOperation({ summary: '推荐 mv', description: ' 说明 : 调用此接口 , 可获取推荐 mv, 实例： /personalized/mv' })
    @Get('/mv')
    async personalizedMv() {
        return await this.personalizedService.personalizedMv();
    }

    @ApiOperation({ summary: '推荐新音乐', description: '说明 : 调用此接口 , 可获取推荐新音乐 实例： /personalized/newsong' })
    @Get('/newsong')
    async personalizedNewsong() {
        return await this.personalizedService.personalizedNewsong();
    }

    @ApiOperation({ summary: '推荐电台', description: '说明 : 调用此接口 , 可获取推荐电台 实例： /personalized/djprogram' })
    @Get('/djprogram')
    async personalizedDjprogram() {
        return await this.personalizedService.personalizedDjprogram();
    }

    @ApiOperation({ summary: '独家放送', description: ' 说明 : 调用此接口 , 可获取独家放送 实例：/personalized/privatecontent' })
    @Get('/privatecontent')
    async personalizedPrivatecontent() {
        return await this.personalizedService.personalizedPrivatecontent();
    }
}