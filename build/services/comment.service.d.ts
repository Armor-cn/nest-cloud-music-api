import { HttpService } from '@nestjs/common';
import { BaseService } from './base.service';
import { CommentMusicDto, CommentAlbumDto, CommentPlayListDto, CommentMvDto, CommentDjDto, CommentVideoDto, CommentHotDto, CommentLikeDto } from '../dto/cloudmusic.dto';
export declare class CommentService extends BaseService {
    private readonly httpService;
    constructor(httpService: HttpService);
    commentMusic(commentMusicDto: CommentMusicDto): Promise<any>;
    commentAlbum(commentAlbumDto: CommentAlbumDto): Promise<any>;
    commentPlayList(commentPlayListDto: CommentPlayListDto): Promise<any>;
    commentMv(commentMvDto: CommentMvDto): Promise<any>;
    commentDj(commentDjDto: CommentDjDto): Promise<any>;
    commentVideo(commentVideoDto: CommentVideoDto): Promise<any>;
    commentHot(commentHotDto: CommentHotDto): Promise<any>;
    commentLike(commentLikeDto: CommentLikeDto): Promise<any>;
}
