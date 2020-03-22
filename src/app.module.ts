import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './common/error.interceptor';
import { CommentModule } from './modules/comment.module';
import { AlbumModule } from './modules/album.module';
import { ArtistsModule } from './modules/artists.module';
import { SimiModule } from './modules/simi.module';
import { RecommendModule } from './modules/recommend.module';
import { LikeModule } from './modules/like.module';
import { MvModule } from './modules/mv.module';
import { VideoModule } from './modules/video.module';
import { TopModule } from './modules/top.module';
import { SearchModule } from './modules/search.module';
import { CloudMusicModule } from './modules/cloudmusic.module';

@Module({
  imports: [
    SearchModule,
    CloudMusicModule,
    TopModule,
    CommentModule,
    MvModule,
    AlbumModule,
    ArtistsModule,
    SimiModule,
    RecommendModule,
    LikeModule,
    VideoModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
