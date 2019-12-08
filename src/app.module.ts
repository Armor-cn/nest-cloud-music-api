import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudMusicController } from './controllers/cloudmusic.controller';
import { CloudMusicService } from './services/cloudmusic.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './common/error.interceptor';
import { CommentModule } from './modules/comment.module';
import { AlbumModule } from './modules/album.module';
import { ArtistsModule } from './modules/artists.module';
import { SimiModule } from './modules/simi.module';
import { RecommendModule } from './modules/recommend.module';
import { LikeModule } from './modules/like.module';
import { MvModule } from './modules/mv.module';

@Module({
  imports: [CommentModule, MvModule, AlbumModule, ArtistsModule, SimiModule, RecommendModule, LikeModule, HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [AppController, CloudMusicController],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ErrorsInterceptor
  }, AppService, CloudMusicService],
})
export class AppModule { }
