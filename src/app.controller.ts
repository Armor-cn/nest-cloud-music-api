import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Test Api 接口')
@Controller()
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) {}

  @ApiOperation({ summary: '默认' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
