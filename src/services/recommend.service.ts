import { Injectable, HttpService, Inject } from '@nestjs/common';
import { BaseService } from './base.service';

@Injectable()
export class RecommendService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }
  async recommendResource() {
    const bashApi = this.cloudMusicApi + `recommend/resource`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
  async recommendSongs() {
    const bashApi = this.cloudMusicApi + `recommend/songs`;
    const res = await this.httpService.get(bashApi).toPromise();
    return await res.data;
  }
}
