import { Module, HttpModule } from '@nestjs/common';
import { ArtistsController } from '../controllers/artists.controller';
import { ArtistsService } from '../services/artists.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
