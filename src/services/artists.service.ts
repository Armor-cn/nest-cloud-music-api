import { BaseService } from './base.service';
import {
  Inject,
  HttpService,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import {
  ArtistsDto,
  ArtistsAlbumDto,
  ArtistsMvDto,
  ArtistsDescDto,
} from '../dto/artists.dto';

@Injectable()
export class ArtistsService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }

  async artists(artistsDto: ArtistsDto) {
    if (!artistsDto.id) {
      throw new BadRequestException('id must  be passed');
    }
    const bashApi = this.cloudMusicApi + `artists?id=${artistsDto.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async artistsMv(artistsMvDto: ArtistsMvDto) {
    if (!artistsMvDto.id) {
      throw new BadRequestException('id must  be passed');
    }
    const bashApi = this.cloudMusicApi + `artists/mv?id=${artistsMvDto.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async artistsAlbum(artistsAlbumDto: ArtistsAlbumDto) {
    if (!artistsAlbumDto.id) {
      throw new BadRequestException('id must  be passed');
    }
    const data = {
      limit: artistsAlbumDto.limit || 50,
      offset: artistsAlbumDto.offset || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `artist/album?id=${artistsAlbumDto.id}&limit=${artistsAlbumDto.limit}&offset=${artistsAlbumDto.offset}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return await res.data;
  }

  async artistDesc(artistsDescDto: ArtistsDescDto) {
    if (!artistsDescDto.id) {
      throw new BadRequestException('id must  be passed');
    }
    const bashApi = this.cloudMusicApi + `artist/desc?id=${artistsDescDto.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
}
