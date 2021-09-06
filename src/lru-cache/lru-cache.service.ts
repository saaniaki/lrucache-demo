import { Injectable } from '@nestjs/common';
import { ILruCache, LruCache } from '@saaniaki/lrucache';

/**
 * LRU Cache Service
 *
 * A NestJS wrapper service for the LRU Cache library.
 */
@Injectable()
export class LruCacheService {
  private static readonly INITIAL_CAPACITY = 10;
  private lruCache: ILruCache<string>;

  public constructor() {
    this.lruCache = new LruCache(LruCacheService.INITIAL_CAPACITY);
  }

  /**
   * The maximum number of cached key-pair entries.
   */
  public get capacity(): number {
    return this.lruCache.capacity;
  }

  /**
   * Instantiates the LRU Cache instance with a new capacity.
   *
   * @param capacity
   */
  public reInstantiate(capacity: number): void {
    this.lruCache = new LruCache(capacity);
  }

  /**
   * Caches a new or updates an exiting entry (key => value). This action is
   * considered a 'use' of the cached/updated key.
   *
   * @param key
   * @param value
   */
  public put(key: string, value: any): void {
    this.lruCache.put(key, value);
  }

  /**
   * Retrieves an already cached value where the entry key matches the passed
   * key. This action is considered a 'use' of the retrieved key.
   *
   * @param key
   */
  public get(key: string): any {
    return this.lruCache.get(key);
  }

  /**
   * Deletes an already cached value where the entry key matches the passed key.
   *
   * @param key
   */
  public delete(key: string): any {
    return this.lruCache.delete(key);
  }

  /**
   * Resets the cache and discards all the cached items.
   */
  public reset(): void {
    return this.lruCache.reset();
  }
}
