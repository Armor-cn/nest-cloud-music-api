import { ApiModelProperty } from '@nestjs/swagger';

export class LikeDto {
    @ApiModelProperty({ description: ' 必选参数 : id', required: true })
    id: string;
    @ApiModelProperty({ description: ' 可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢', required: false })
    like: boolean;
}

export class LikeListDto {
    @ApiModelProperty({ description: '必选参数 : uid: 用户 id', required: true })
    uid: string;
}