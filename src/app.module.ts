import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LruCacheService } from './lru-cache/lru-cache.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LruCacheService],
})
export class AppModule {}
