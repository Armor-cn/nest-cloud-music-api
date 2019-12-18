import { Injectable, Inject, HttpService } from '@nestjs/common';
import { BaseService } from './base.service';
import { SearchDto } from '../dto/search.dto';

@Injectable()
export class SearchService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }

    async search(searchDto: SearchDto) {
        const data = {
            keywords: searchDto.keywords,
            limit: searchDto.limit || 30,
            offset: searchDto.offset || 0,
            type: searchDto.type || 1,
        }
        const baseApi = encodeURI(this.cloudMusicApi + `search?keywords=${data.keywords}&limit=${data.limit}&offset=${data.offset}&type=${data.type}`);
        const res = await this.httpService.post(baseApi, data).toPromise();
        return await res.data;
    }
}