import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseresModule } from './useres/useres.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UseresModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
