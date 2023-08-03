import { Module } from '@nestjs/common';
import { UseresService } from './useres.service';
import { UseresController } from './useres.controller';

@Module({
  controllers: [UseresController],
  providers: [UseresService]
})
export class UseresModule {}
