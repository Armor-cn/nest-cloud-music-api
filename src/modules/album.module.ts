import { Module, HttpModule } from '@nestjs/common';
import { AlbumController } from '../controllers/album.controller';
import { AlbumService } from '../services/album.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AlbumController],
  providers: [AlbumService],
  exports: [AlbumService],
})
export class AlbumModule {}
