import { ApiModelProperty } from '@nestjs/swagger';

export class SimiMvDto {
    @ApiModelProperty({ description: ' 必选参数 : mvid', required: true })
    mvid: string;
}
export class SimiUserDto {
    @ApiModelProperty({ description: ' 必选参数 : id', required: true })
    id: string;
}