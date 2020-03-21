import { ApiProperty } from '@nestjs/swagger';

export class SearchDto {
  @ApiProperty({ description: '必选参数 : keywords : 关键词 ', required: true })
  keywords: string;
  @ApiProperty({
    description: 'limit : 返回数量 , 默认为 30 ',
    default: 30,
    required: false,
  })
  limit: number;
  @ApiProperty({
    description:
      '偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0',
    default: 0,
    required: false,
  })
  offset: number;
  @ApiProperty({
    description:
      'type: 搜索类型；默认为 1 即单曲  取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合',
    default: 1,
    required: false,
  })
  type: number;
}
