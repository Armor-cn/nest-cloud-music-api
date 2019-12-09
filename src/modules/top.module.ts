import { Module, HttpModule } from '@nestjs/common';
import { TopController } from '../controllers/top.controller';
import { TopService } from '../services/top.service';

@Module({
    imports: [HttpModule.register({
        timeout: 6000,
        maxRedirects: 5
    })],
    controllers: [TopController],
    providers: [TopService]
})
export class TopModule { }