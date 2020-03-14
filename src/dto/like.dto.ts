import { ApiProperty } from '@nestjs/swagger';

export class LikeDto {
    @ApiProperty({ description: ' 必选参数 : id', required: true })
    id: string;
    @ApiProperty({ description: ' 可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢', required: false })
    like: boolean;
}

export class LikeListDto {
    @ApiProperty({ description: '必选参数 : uid: 用户 id', required: true })
    uid: string;
}