import { BaseService } from './base.service';
import { Inject, HttpService, Injectable, BadRequestException } from '@nestjs/common';
import { ArtistsDescDto, SimiMvDto, SimiUserDto } from '../dto/cloudmusic.dto';

@Injectable()
export class SimiService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }
    async simiArtist(artistsDescDto: ArtistsDescDto) {
        if (!artistsDescDto.id) {
            throw new BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/artist?id=${artistsDescDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiPlaylist(artistsDescDto: ArtistsDescDto) {
        if (!artistsDescDto.id) {
            throw new BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/playlist?id=${artistsDescDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }

    async simiMv(simiMvDto: SimiMvDto) {
        if (!simiMvDto.mvid) {
            throw new BadRequestException('mvid must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/mv?mvid=${simiMvDto.mvid}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }

    async simiSong(simiSongDto: ArtistsDescDto) {
        if (!simiSongDto.id) {
            throw new BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/song?id=${simiSongDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }

    async simiUser(simiUserDto: SimiUserDto) {
        if (!simiUserDto.id) {
            throw new BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/user?id=${simiUserDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }


}