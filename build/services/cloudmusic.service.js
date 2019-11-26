"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CloudMusicService = class CloudMusicService {
    constructor(httpService) {
        this.httpService = httpService;
        this.cloudMusicApi = 'http://localhost:3000/';
        this.cloudMusicApi = this.cloudMusicApi;
    }
    async topSong(topSongDto) {
        if (!topSongDto.type) {
            throw new common_1.BadRequestException(`type  must be passed`);
        }
        const bashApi = this.cloudMusicApi + `top/song?type=${topSongDto.type}`;
        const data = await this.httpService.get(bashApi).toPromise();
        return await data.data;
    }
    async banner(bannerDto) {
        const data = {
            type: bannerDto.type || 0
        };
        const bashApi = this.cloudMusicApi + `banner?type=${data.type}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return await res.data;
    }
    async songDetails(songDetails) {
        if (!songDetails.ids) {
            throw new common_1.BadRequestException(`ids  must be passed`);
        }
        const bashApi = this.cloudMusicApi + `song/detail?ids=${songDetails.ids}`;
        const res = await this.httpService.post(bashApi, songDetails).toPromise();
        return await res.data;
    }
    async album(albumDto) {
        if (!albumDto.id) {
            throw new common_1.BadRequestException(`id  must be passed`);
        }
        const bashApi = this.cloudMusicApi + `album?id=${albumDto.id}`;
        const res = await this.httpService.post(bashApi, albumDto).toPromise();
        return await res.data;
    }
    async albumDetailDynamic(albumDetailDynamicDto) {
        if (!albumDetailDynamicDto.id) {
            throw new common_1.BadRequestException('id must be passed');
        }
        const bashApi = this.cloudMusicApi + `album/detail/dynamic?id=${albumDetailDynamicDto.id}`;
        const res = await this.httpService.post(bashApi, albumDetailDynamicDto).toPromise();
        return await res.data;
    }
    async albumSub(albumSubDto) {
        if (!albumSubDto.id) {
            throw new common_1.BadRequestException('id must be passed');
        }
        if (!albumSubDto.t) {
            throw new common_1.BadRequestException('t must be passed');
        }
        const bashApi = this.cloudMusicApi + `album/sub?id=${albumSubDto.id}&t=${albumSubDto.t}`;
        const res = await this.httpService.post(bashApi, albumSubDto).toPromise();
        return await res.data;
    }
    async albumSubList(albumSubListDto) {
        const data = {
            limit: albumSubListDto.limit || 25,
            off: albumSubListDto.offset || 0
        };
        const bashApi = this.cloudMusicApi + `album/sublist`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return await res.data;
    }
    async artists(artistsDto) {
        if (!artistsDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `artists?id=${artistsDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async artistsMv(artistsMvDto) {
        if (!artistsMvDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `artists/mv?id=${artistsMvDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async artistsAlbum(artistsAlbumDto) {
        if (!artistsAlbumDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const data = {
            limit: artistsAlbumDto.limit || 50,
            offset: artistsAlbumDto.offset || 0
        };
        const bashApi = this.cloudMusicApi + `artist/album?id=${artistsAlbumDto.id}&limit=${artistsAlbumDto.limit}&offset=${artistsAlbumDto.offset}`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return await res.data;
    }
    async artistDesc(artistsDescDto) {
        if (!artistsDescDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `artist/desc?id=${artistsDescDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiArtist(artistsDescDto) {
        if (!artistsDescDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/artist?id=${artistsDescDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiPlaylist(artistsDescDto) {
        if (!artistsDescDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/playlist?id=${artistsDescDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiMv(simiMvDto) {
        if (!simiMvDto.mvid) {
            throw new common_1.BadRequestException('mvid must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/mv?mvid=${simiMvDto.mvid}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiSong(simiSongDto) {
        if (!simiSongDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/song?id=${simiSongDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async simiUser(simiUserDto) {
        if (!simiUserDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const bashApi = this.cloudMusicApi + `simi/user?id=${simiUserDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
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
    async personalFm() {
        const bashApi = this.cloudMusicApi + `personal_fm`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async dailySignin(dailySigninDto) {
        const data = {
            type: dailySigninDto.type || 0
        };
        const bashApi = this.cloudMusicApi + `daily_signin`;
        const res = await this.httpService.post(bashApi, data).toPromise();
        return await res.data;
    }
    async like(likeDto) {
        if (!likeDto.id) {
            throw new common_1.BadRequestException('id must  be passed');
        }
        const data = {
            like: likeDto.like || true
        };
        const bashApi = this.cloudMusicApi + `simi/song?id=${likeDto.id}&like=${data.like}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async likeList(likeListDto) {
        if (!likeListDto.uid) {
            throw new common_1.BadRequestException('uid must be passed');
        }
        const bashApi = this.cloudMusicApi + `likelist?uid=${likeListDto.uid}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async fmTrash(fmTrashDto) {
        if (!fmTrashDto.id) {
            throw new common_1.BadRequestException('uid must be passed');
        }
        const bashApi = this.cloudMusicApi + `fm_trash?id=${fmTrashDto.id}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async topAlbum(topAlbumDto) {
        const data = {
            offset: topAlbumDto.offset || 0,
            limit: topAlbumDto.limit || 50
        };
        const bashApi = this.cloudMusicApi + `top/album?offset=${data.offset}&limit=${data.limit}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async albumNewest() {
        const bashApi = this.cloudMusicApi + `album/newest`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async scrobble(scrobbleDto) {
        if (!scrobbleDto.id) {
            throw new common_1.BadRequestException('id must be passed ');
        }
        if (!scrobbleDto.sourceid) {
            throw new common_1.BadRequestException('sourceid be passed');
        }
        const bashApi = this.cloudMusicApi + `scrobble/id=${scrobbleDto.id}&sourceid=${scrobbleDto.sourceid}&time=${scrobbleDto.time}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async topArtists(topArtistsDto) {
        const data = {
            offset: topArtistsDto.offset || 0,
            limit: topArtistsDto.limit || 50
        };
        const bashApi = this.cloudMusicApi + `top/artists?offset=${data.offset}&limit=${data.limit}`;
        const res = await this.httpService.get(bashApi).toPromise();
        return await res.data;
    }
    async mvAll(mvAllDto) {
        const data = {
            area: mvAllDto.area || '全部',
            type: mvAllDto.type || '全部',
            order: mvAllDto.order || '上升最快',
            limit: mvAllDto.limit || 50,
            offset: mvAllDto.offset || 0
        };
        const bashApi = encodeURI(this.cloudMusicApi + `mv/all?area=${data.area}&type=${data.type}&order=${data.order}&limit=${data.limit}&offset=${data.offset}`);
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }
    async mvFirst(mvFirstDto) {
        const data = {
            area: mvFirstDto.area || '',
            limit: mvFirstDto.limit || 50
        };
        const bashApi = encodeURI(this.cloudMusicApi + `mv/first?area=${data.area}&limit=${data.limit}`);
        const res = await this.httpService.post(bashApi).toPromise();
        return await res.data;
    }
};
CloudMusicService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.HttpService)),
    __metadata("design:paramtypes", [common_1.HttpService])
], CloudMusicService);
exports.CloudMusicService = CloudMusicService;
//# sourceMappingURL=cloudmusic.service.js.map