import { Module, HttpModule } from '@nestjs/common';
import { recommendController } from '../controllers/recommend.controller';
import { RecommendService } from '../services/recommend.service';

@Module({
    imports: [HttpModule.register({
        timeout: 6000,
        maxRedirects: 5
    })],
    controllers: [recommendController],
    providers: [RecommendService]
})

export class RecommendModule { }