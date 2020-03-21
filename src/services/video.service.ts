import {
  Injectable,
  Inject,
  HttpService,
  BadRequestException,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { VideoGroupDto } from '../dto/video.dto';

@Injectable()
export class VideoService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }
  async videoGroupList() {
    const bashApi = this.cloudMusicApi + `video/group/list`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }

  async videoGroup(videoGroupDto: VideoGroupDto) {
    if (!videoGroupDto.id) {
      throw new BadRequestException(`id must be passed`);
    }
    const bashApi = this.cloudMusicApi + `video/group?id=${videoGroupDto.id}`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
}
