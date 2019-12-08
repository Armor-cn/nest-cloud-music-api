import { Injectable, Inject, HttpService } from '@nestjs/common';
import { BaseService } from './base.service';
import { MvAllDto, MvFirstDto, MvExclusiveRcmd } from '../dto/cloudmusic.dto';

@Injectable()
export class MvService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }

    async mvAll(mvAllDto: MvAllDto) {
        const data = {
            area: mvAllDto.area || '全部',
            type: mvAllDto.type || '全部',
            order: mvAllDto.order || '上升最快',
            limit: mvAllDto.limit || 50,
            offset: mvAllDto.offset || 0,
        };
        /**
         * 需要bashApi中代的中文字符进行转义
         */
        const bashApi = encodeURI(this.cloudMusicApi + `mv/all?area=${data.area}&type=${data.type}&order=${data.order}&limit=${data.limit}&offset=${data.offset}`);
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }

    async mvFirst(mvFirstDto: MvFirstDto) {
        const data = {
            area: mvFirstDto.area || '',
            limit: mvFirstDto.limit || 50,
        };
        const bashApi = encodeURI(this.cloudMusicApi + `mv/first?area=${data.area}&limit=${data.limit}`);
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }

    async mvExclusiveRcmd(mvExclusiveRcmd: MvExclusiveRcmd) {
        const data = {
            limit: mvExclusiveRcmd.limit || 50,
            offset: mvExclusiveRcmd.offset || 0,
        };
        const bashApi = this.cloudMusicApi + `mv/exclusive/rcmd?limit=${data.limit}&offset=${data.offset}`;
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }
}