import { Module, HttpModule } from '@nestjs/common';
import { CloudMusicService } from '../services/cloudmusic.service';
import { CloudMusicController } from '../controllers/cloudmusic.controller';

@Module({
    imports:[HttpModule.register({maxRedirects:5,timeout:6000})],
    providers:[ CloudMusicService],
    controllers: [CloudMusicController]
})
export class CloudMusicModule { }