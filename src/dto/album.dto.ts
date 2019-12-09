import { ApiModelProperty } from '@nestjs/swagger';

export class AlbumDto {
    @ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true })
    id: string;
}

export class AlbumDetailDynamicDto {
    @ApiModelProperty({ description: '必选参数 : id: 专辑 id', required: true })
    id: string;
}

export class AlbumSubDto {
    @ApiModelProperty({ description: '必选参数 :id: 专辑 id ', required: true })
    id: string;
    @ApiModelProperty({ description: 't : 1 为收藏,其他为取消收藏', required: true })
    t: number;
}

export class AlbumSubListDto {
    @ApiModelProperty({ description: '取出数量 , 默认为 25 ', default: 25, required: false })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}