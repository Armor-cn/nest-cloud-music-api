import {
  Injectable,
  HttpService,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { BaseService } from './base.service';
import {
  CommentMusicDto,
  CommentAlbumDto,
  CommentPlayListDto,
  CommentMvDto,
  CommentDjDto,
  CommentVideoDto,
  CommentHotDto,
  CommentLikeDto,
} from '../dto/comment.dto';
@Injectable()
export class CommentService extends BaseService {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {
    super();
  }
  async commentMusic(commentMusicDto: CommentMusicDto) {
    if (!commentMusicDto.id) {
      throw new BadRequestException(`id must be passed`);
    }
    const data = {
      rid: commentMusicDto.id,
      limit: commentMusicDto.limit || 20,
      offset: commentMusicDto.offset || 0,
      beforeTime: commentMusicDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/music?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentAlbum(commentAlbumDto: CommentAlbumDto) {
    if (!commentAlbumDto.id) {
      throw new BadRequestException(`id must be passed`);
    }
    const data = {
      rid: commentAlbumDto.id,
      limit: commentAlbumDto.limit || 20,
      offset: commentAlbumDto.offset || 0,
      beforeTime: commentAlbumDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/album?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentPlayList(commentPlayListDto: CommentPlayListDto) {
    if (!commentPlayListDto.id) {
      throw new BadRequestException(`id  must be passed`);
    }
    const data = {
      rid: commentPlayListDto.id,
      limit: commentPlayListDto.limit || 20,
      offset: commentPlayListDto.offset || 0,
      beforeTime: commentPlayListDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/playlist?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }
  async commentMv(commentMvDto: CommentMvDto) {
    if (!commentMvDto.id) {
      throw new BadRequestException(`id must be passed`);
    }
    const data = {
      rid: commentMvDto.id,
      limit: commentMvDto.limit || 20,
      offset: commentMvDto.offset || 0,
      beforeTime: commentMvDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/mv?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentDj(commentDjDto: CommentDjDto) {
    if (!commentDjDto.id) {
      throw new BadRequestException(`id  must be passed`);
    }
    const data = {
      rid: commentDjDto.id,
      limit: commentDjDto.limit || 20,
      offset: commentDjDto.offset || 0,
      beforeTime: commentDjDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/dj?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentVideo(commentVideoDto: CommentVideoDto) {
    if (!commentVideoDto.id) {
      throw new BadRequestException(`id  must be passed`);
    }
    const data = {
      rid: commentVideoDto.id,
      limit: commentVideoDto.limit || 20,
      offset: commentVideoDto.offset || 0,
      beforeTime: commentVideoDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/video?id=${data.rid}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentHot(commentHotDto: CommentHotDto) {
    if (!commentHotDto.id) {
      throw new BadRequestException(`id  must be passed`);
    }
    if (!commentHotDto.type) {
      throw new BadRequestException(`type  must be passed `);
    }
    const data = {
      rid: commentHotDto.id,
      type: commentHotDto.type,
      limit: commentHotDto.limit || 20,
      offset: commentHotDto.offset || 0,
      beforeTime: commentHotDto.beforeTime || 0,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/hot?id=${data.rid}&type=${data.type}&limit=${data.limit}&offset=${data.offset}&beforeTime=${data.beforeTime}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }

  async commentLike(commentLikeDto: CommentLikeDto) {
    if (!commentLikeDto.id) {
      throw new BadRequestException(`id  must be passed`);
    }
    if (!commentLikeDto.type) {
      throw new BadRequestException(`type must be passed`);
    }
    if (!commentLikeDto.t) {
      throw new BadRequestException('t must be passed');
    }
    if (!commentLikeDto.type) {
      throw new BadRequestException(' type must be passed');
    }
    const data = {
      id: commentLikeDto.id,
      cid: commentLikeDto.cid,
      t: commentLikeDto.t,
      type: commentLikeDto.type,
    };
    const bashApi =
      this.cloudMusicApi +
      `comment/like?id=${data.id}&cid=${data.cid}&t=${data.t}&type=${data.type}`;
    const res = await this.httpService.post(bashApi, data).toPromise();
    return res.data;
  }
}
