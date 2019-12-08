import { Injectable, Inject, HttpService, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { LikeDto, LikeListDto } from 'src/dto/cloudmusic.dto';

@Injectable()
export class LikeService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }
    async like(likeDto: LikeDto) {
        if (!likeDto.id) {
            throw new BadRequestException('id must  be passed');
        }
        const data = {
            like: likeDto.like || true
        };
        const bashApi = this.cloudMusicApi + `simi/song?id=${likeDto.id}&like=${data.like}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }

    async likeList(likeListDto: LikeListDto) {
        if (!likeListDto.uid) {
            throw new BadRequestException('uid must be passed');
        }
        const bashApi = this.cloudMusicApi + `likelist?uid=${likeListDto.uid}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }

}