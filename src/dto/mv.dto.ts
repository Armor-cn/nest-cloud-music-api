import { ApiProperty } from '@nestjs/swagger';

export class MvAllDto {
  @ApiProperty({
    description:
      'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 ',
    required: false,
    default: '',
  })
  area: string;
  @ApiProperty({
    description:
      'type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部',
    default: '',
    required: false,
  })
  type: string;
  @ApiProperty({
    description: '排序,可选值为上升最快,最热,最新,不填则为上升最快',
    default: '',
    required: false,
  })
  order: string;
  @ApiProperty({
    description: '取出数量 , 默认为 50',
    required: false,
    default: 50,
  })
  limit: number;
  @ApiProperty({
    description:
      '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0',
    default: 0,
    required: false,
  })
  offset: number;
}

export class MvFirstDto {
  @ApiProperty({
    description:
      'area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部',
    required: false,
    default: '',
  })
  area: string;
  @ApiProperty({
    description: '取出数量 , 默认为 50',
    required: false,
    default: 50,
  })
  limit: number;
}

export class MvExclusiveRcmd {
  @ApiProperty({
    description: 'limit: 取出数量 , 默认为 50',
    required: false,
    default: 50,
  })
  limit: number;
  @ApiProperty({
    description:
      '偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0',
    required: false,
    default: 0,
  })
  offset: number;
}

export class MvUrlDto {
  @ApiProperty({ description: ' 可选参数 : id: mv id', required: false })
  id: string;
}
