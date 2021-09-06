import { Test, TestingModule } from '@nestjs/testing';
import { LruCacheService } from './lru-cache.service';

describe('LruCacheService', () => {
  let service: LruCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LruCacheService],
    }).compile();

    service = module.get<LruCacheService>(LruCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
