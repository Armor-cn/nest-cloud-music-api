import { ApiProperty } from '@nestjs/swagger';

export class AlbumDto {
  @ApiProperty({ description: '必选参数 : id: 专辑 id', required: true })
  id: string;
}

export class AlbumDetailDynamicDto {
  @ApiProperty({ description: '必选参数 : id: 专辑 id', required: true })
  id: string;
}

export class AlbumSubDto {
  @ApiProperty({ description: '必选参数 :id: 专辑 id ', required: true })
  id: string;
  @ApiProperty({ description: 't : 1 为收藏,其他为取消收藏', required: true })
  t: number;
}

export class AlbumSubListDto {
  @ApiProperty({
    description: '取出数量 , 默认为 25 ',
    default: 25,
    required: false,
  })
  limit: number;
  @ApiProperty({
    description:
      '偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0',
    default: 0,
    required: false,
  })
  offset: number;
}
