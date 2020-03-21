import { ApiProperty } from '@nestjs/swagger';

export class PersonalizedDto {
  @ApiProperty({
    description: 'limit: 取出数量 , 默认为 30',
    required: false,
    default: 30,
  })
  limit: number;
}
