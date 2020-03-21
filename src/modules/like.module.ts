import { Module, HttpModule } from '@nestjs/common';
import { LikeController } from '../controllers/like.controller';
import { LikeService } from '../services/like.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 6000,
      maxRedirects: 5,
    }),
  ],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
