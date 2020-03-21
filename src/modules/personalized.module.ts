import { Module, HttpModule } from '@nestjs/common';
import { PersonalizedController } from '../controllers/personalized.controller';
import { PersonalizedService } from '../services/personalized.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 6000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PersonalizedController],
  providers: [PersonalizedService],
})
export class PersonalizedModule {}
