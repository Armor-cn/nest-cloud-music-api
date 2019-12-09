import { ApiModelProperty } from '@nestjs/swagger';

export class TopSongDto {
    @ApiModelProperty({ description: '必选参数 :type: 地区类型 id, 对应以下: 全部:0，华语:7，欧美:96，日本:8，韩国:16', required: true, default: 0 })
    type: number;
}

export class TopAlbumDto {
    @ApiModelProperty({ description: ' limit: 取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class TopArtistsDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 50', required: false, default: 50 })
    limit: number;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}
export class TopMvDto {
    @ApiModelProperty({ description: 'limit: 取出数量 , 默认为 30', required: false, default: 30 })
    limit: number;
    @ApiModelProperty({ description: 'area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部', required: false, default: '' })
    area: string;
    @ApiModelProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0', required: false, default: 0 })
    offset: number;
}

export class TopDetailDto {
    @ApiModelProperty({ description: ' 必选参数 : mvid: mv 的 id', required: true })
    mvid: string;
}