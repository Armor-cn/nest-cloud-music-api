import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('Test Api 接口')
@Controller()
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) { }

  @ApiOperation({ title: '默认' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
