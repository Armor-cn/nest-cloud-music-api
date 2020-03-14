import { ApiProperty } from '@nestjs/swagger';

export class ArtistsDto {
    @ApiProperty({ description: '必选参数 : id: 歌手 id, 可由搜索接口获得', required: true })
    id: string;
}

export class ArtistsMvDto {
    @ApiProperty({ description: '必选参数 :  id: 歌手 id, 可由搜索接口获得', required: true })
    id: string;
}

export class ArtistsAlbumDto {
    @ApiProperty({ description: '必选参数 : id', required: true })
    id: string;
    @ApiProperty({ description: '可选参数 : limit: 取出数量 , 默认为 50', default: 50, required: false })
    limit: number;
    @ApiProperty({ description: '偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0', default: 0, required: false })
    offset: number;
}

export class ArtistsDescDto {
    @ApiProperty({ description: ' 必选参数 : id', required: true })
    id: string;
}
