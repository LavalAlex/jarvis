import { Module } from '@nestjs/common';
import { WhatsappModule } from './modules/whatsapp/whatsapp.module';

@Module({
  imports: [WhatsappModule],
})
export class AppModule {}
