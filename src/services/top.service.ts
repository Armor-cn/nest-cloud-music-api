import {
  Injectable,
  Inject,
  HttpService,
  BadRequestException,
} from '@nestjs/common';
import { BaseService } from './base.service';
import {
  TopSongDto,
  TopAlbumDto,
  TopArtistsDto,
  TopMvDto,
} from 'src/dto/top.dto';
@Injectable()
export class TopService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }
  async topSong(topSongDto: TopSongDto) {
    if (!topSongDto.type) {
      throw new BadRequestException(`type  must be passed`);
    }
    const bashApi = this.cloudMusicApi + `top/song?type=${topSongDto.type}`;
    const data = await this.httpService.get(bashApi).toPromise();
    return await data.data;
  }
  async topAlbum(topAlbumDto: TopAlbumDto) {
    const data = {
      offset: topAlbumDto.offset || 0,
      limit: topAlbumDto.limit || 50,
    };
    const bashApi =
      this.cloudMusicApi +
      `top/album?offset=${data.offset}&limit=${data.limit}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async topArtists(topArtistsDto: TopArtistsDto) {
    const data = {
      offset: topArtistsDto.offset || 0,
      limit: topArtistsDto.limit || 50,
    };
    const bashApi =
      this.cloudMusicApi +
      `top/artists?offset=${data.offset}&limit=${data.limit}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
  async topMv(topMvDto: TopMvDto) {
    const data = {
      area: topMvDto.area || '',
      limit: topMvDto.limit || 30,
      offset: topMvDto.offset || 0,
    };
    const bashApi = encodeURI(
      this.cloudMusicApi +
        `top/mv?limit=${data.limit}&area=${data.area}&offset=${data.offset}`,
    );
    const res = await this.httpService.post(bashApi).toPromise();
    return await res.data;
  }
}
