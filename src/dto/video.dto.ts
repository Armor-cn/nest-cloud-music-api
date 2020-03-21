import { ApiProperty } from '@nestjs/swagger';

export class VideoGroupDto {
  @ApiProperty({
    description: ' 必选参数 : id: videoGroup 的 id',
    required: true,
  })
  id: string;
}
