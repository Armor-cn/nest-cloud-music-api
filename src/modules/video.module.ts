import { Module, HttpModule } from '@nestjs/common';
import { VideoController } from '../controllers/video.controller';
import { VideoService } from '../services/video.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 6000,
      maxRedirects: 5,
    }),
  ],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
