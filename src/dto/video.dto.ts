import { ApiModelProperty } from '@nestjs/swagger';

export class VideoGroupDto {
    @ApiModelProperty({ description: ' 必选参数 : id: videoGroup 的 id', required: true })
    id: string;
}