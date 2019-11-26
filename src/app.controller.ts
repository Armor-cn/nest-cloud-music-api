import { Controller, Get, Query, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CloudMusicService } from './services/cloudmusic.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('Test Api 接口')
@Controller()
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService,
    @Inject(CloudMusicService) private readonly cloudMusicService: CloudMusicService) { }

  @ApiOperation({ title: '默认' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
