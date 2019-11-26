import { AppService } from './app.service';
import { CloudMusicService } from './services/cloudmusic.service';
export declare class AppController {
    private readonly appService;
    private readonly cloudMusicService;
    constructor(appService: AppService, cloudMusicService: CloudMusicService);
    getHello(): string;
}
