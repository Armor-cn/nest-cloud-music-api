import { Module, HttpModule } from '@nestjs/common';
import { MvController } from '../controllers/mv.controller';
import { MvService } from '../services/mv.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 6000,
      maxRedirects: 5,
    }),
  ],
  controllers: [MvController],
  providers: [MvService],
})
export class MvModule {}
