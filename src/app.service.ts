import { Injectable } from '@nestjs/common';
import { LruCacheService } from './lru-cache/lru-cache.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  public constructor(
    private readonly lruCacheService: LruCacheService,
    private readonly httpService: HttpService,
  ) {}

  public getCacheCapacity(): number {
    return this.lruCacheService.capacity;
  }

  public reInstantiateCache(capacity: number): void {
    this.lruCacheService.reInstantiate(capacity);
  }

  public async fetchAndCacheGitHubUser(username: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let user = this.lruCacheService.get(username);
      if (user === undefined) {
        // Fake some processing...
        await new Promise((resolve) => setTimeout(resolve, 5000));
        this.httpService
          .get(`https://api.github.com/users/${username}`)
          .subscribe({
            next: (response: AxiosResponse) => {
              user = response.data;
              this.lruCacheService.put(username, user);
              resolve(user);
            },
            error: (err) => reject(err),
          });
      } else {
        resolve(user);
      }
    });
  }

  public deleteCacheEntry(key: string): any {
    return this.lruCacheService.delete(key);
  }

  public resetCache(): void {
    return this.lruCacheService.reset();
  }
}
