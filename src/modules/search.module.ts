import { Module, HttpModule } from '@nestjs/common';
import { SearchService } from '../services/search.service';
import { SearchController } from '../controllers/search.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
