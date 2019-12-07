import { Injectable, Inject, HttpService, BadRequestException } from "@nestjs/common";
import { BaseService } from "./base.service";
import { AlbumDto, AlbumSubDto, AlbumSubListDto, AlbumDetailDynamicDto } from "../dto/cloudmusic.dto";

@Injectable()
export class AlbumService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }

    async album(albumDto: AlbumDto) {
        if (!albumDto.id) {
            throw new BadRequestException(`id  must be passed`);
        }
        const bashApi = this.cloudMusicApi + `album?id=${albumDto.id}`;
        const res = await this.httpService.post(bashApi, albumDto).toPromise();
        return await res.data;
    }

    async albumDetailDynamic(albumDetailDynamicDto: AlbumDetailDynamicDto) {
        if (!albumDetailDynamicDto.id) {
            throw new BadRequestException('id must be passed');
        }
        const bashApi = this.cloudMusicApi + `album/detail/dynamic?id=${albumDetailDynamicDto.id}`;
        const res = await this.httpService.post(bashApi, albumDetailDynamicDto).toPromise();
        return await res.data;
    }

    async albumSub(albumSubDto: AlbumSubDto) {
        if (!albumSubDto.id) {
            throw new BadRequestException('id must be passed');
        }
        if (!albumSubDto.t) {
            throw new BadRequestException('t must be passed');
        }
        const bashApi = this.cloudMusicApi + `album/sub?id=${albumSubDto.id}&t=${albumSubDto.t}`;
        const res = await this.httpService.post(bashApi, albumSubDto).toPromise();
        return await res.data;
    }

    async albumSubList(albumSubListDto: AlbumSubListDto) {
        const data = {
            limit: albumSubListDto.limit || 25,
            off: albumSubListDto.offset || 0
        };
        const bashApi = this.cloudMusicApi + `album/sublist`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return await res.data;
    }

    async albumNewest() {
        const bashApi = this.cloudMusicApi + `album/newest`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
}