import { CommentService } from '../services/comment.service';
import { CommentMusicDto, CommentAlbumDto, CommentPlayListDto, CommentMvDto, CommentDjDto, CommentVideoDto, CommentHotDto, CommentLikeDto } from '../dto/cloudmusic.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    comment(): Promise<void>;
    commentMusic(commentMusicDto: CommentMusicDto): Promise<any>;
    commentAlbum(commentAlbum: CommentAlbumDto): Promise<any>;
    commentPlayList(commentPlayListDto: CommentPlayListDto): Promise<any>;
    commentMv(commentMvDto: CommentMvDto): Promise<any>;
    commentDj(commentDjDto: CommentDjDto): Promise<any>;
    commentVideo(commentVideoDto: CommentVideoDto): Promise<any>;
    commentHot(commentHotDto: CommentHotDto): Promise<any>;
    commentLike(commentLikeDto: CommentLikeDto): Promise<any>;
}
