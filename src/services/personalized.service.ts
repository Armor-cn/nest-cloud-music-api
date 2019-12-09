import { HttpService, Inject, Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { PersonalizedDto } from '../dto/cloudmusic.dto';

@Injectable()
export class PersonalizedService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }

    async personalized(personalizedDto: PersonalizedDto) {
        const data = {
            limit: personalizedDto.limit || 30,
        };
        const bashApi = this.cloudMusicApi + `personalized?limit=${data.limit}`;
        const res = await this.httpService.post(bashApi).toPromise();
        return res.data;
    }

    async personalizedNewsong() {
        const bashApi = this.cloudMusicApi + `personalized/newsong`;
        const res = await this.httpService.get(bashApi).toPromise();
        return res.data;
    }
    async personalizedDjprogram() {
        const bashApi = this.cloudMusicApi + `personalized/djprogram`;
        const res = await this.httpService.get(bashApi).toPromise();
        return res.data;
    }

    async programRecommend() {
        const bashApi = this.cloudMusicApi + `program/recommend`;
        const res = await this.httpService.get(bashApi).toPromise();
        return res.data;
    }

    async personalizedMv() {
        const bashApi = this.cloudMusicApi + `personalized/mv`;
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }
    
    async personalizedPrivatecontent() {
        const bashApi = this.cloudMusicApi + `personalized/privatecontent`;
        const res = await this.httpService.get(bashApi).toPromise();
        return res.data;
    }

}