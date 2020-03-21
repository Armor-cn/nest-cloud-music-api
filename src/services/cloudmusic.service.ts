import {
  Injectable,
  Inject,
  HttpService,
  BadRequestException,
} from '@nestjs/common';
import {
  BannerDto,
  SongDetailsDto,
  FmTrashDto,
  ScrobbleDto,
  DailySigninDto,
  RelatedAllvideoDto,
} from '../dto/cloudmusic.dto';
import { BaseService } from './base.service';

@Injectable()
export class CloudMusicService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }

  async banner(bannerDto: BannerDto) {
    // 默认为0，即PC
    const data = {
      type: bannerDto.type || 0,
    };
    const bashApi = this.cloudMusicApi + `banner?type=${data.type}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return await res.data;
  }

  async songDetails(songDetails: SongDetailsDto) {
    if (!songDetails.ids) {
      throw new BadRequestException(`ids  must be passed`);
    }
    const bashApi = this.cloudMusicApi + `song/detail?ids=${songDetails.ids}`;
    const res = await this.httpService.post(bashApi, songDetails).toPromise();
    return await res.data;
  }
  async personalFm() {
    const bashApi = this.cloudMusicApi + `personal_fm`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async dailySignin(dailySigninDto: DailySigninDto) {
    const data = {
      type: dailySigninDto.type || 0,
    };
    const bashApi = this.cloudMusicApi + `daily_signin`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return await res.data;
  }

  async fmTrash(fmTrashDto: FmTrashDto) {
    if (!fmTrashDto.id) {
      throw new BadRequestException('uid must be passed');
    }
    const bashApi = this.cloudMusicApi + `fm_trash?id=${fmTrashDto.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async scrobble(scrobbleDto: ScrobbleDto) {
    if (!scrobbleDto.id) {
      throw new BadRequestException('id must be passed ');
    }
    if (!scrobbleDto.sourceid) {
      throw new BadRequestException('sourceid be passed');
    }
    const bashApi =
      this.cloudMusicApi +
      `scrobble/id=${scrobbleDto.id}&sourceid=${scrobbleDto.sourceid}&time=${scrobbleDto.time}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async programRecommend() {
    const bashApi = this.cloudMusicApi + `program/recommend`;
    const res = await this.httpService.get(bashApi).toPromise();
    return res.data;
  }

  async relatedAllvideo(relatedAllvideo: RelatedAllvideoDto) {
    if (!relatedAllvideo.id) {
      throw new BadRequestException(`idmust be passed `);
    }
    const bashApi =
      this.cloudMusicApi + `related/allvideo?id=${relatedAllvideo.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
}
