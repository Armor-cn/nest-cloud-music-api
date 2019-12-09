import { ApiModelProperty } from '@nestjs/swagger';

export class PersonalizedDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 30', required: false, default: 30 })
    limit: number;
}
