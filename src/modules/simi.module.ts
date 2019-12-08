import { Module, HttpModule } from '@nestjs/common';
import { SimiService } from '../services/simi.service';
import { SimiController } from '../controllers/simi.controller';

@Module({
    imports: [HttpModule.register({
        timeout: 6000,
        maxRedirects: 5
    })],
    controllers: [SimiController],
    providers: [SimiService]
})

export class SimiModule { }