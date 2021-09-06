import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ReInstantiateDto } from './data-transfer-object/re-instantiate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public health(): any {
    return {
      success: "I'm alive!",
    };
  }

  @Post('/re-instantiate')
  public reInstantiate(@Body() dto: ReInstantiateDto): any {
    this.appService.reInstantiateCache(dto.capacity);
    return {
      success: `You now have a fresh cache with capacity of ${this.appService.getCacheCapacity()}`,
    };
  }

  @Get(':username')
  public async getGitHubUser(
    @Param('username') username: string,
  ): Promise<any> {
    return await this.appService.fetchAndCacheGitHubUser(username);
  }

  @Delete(':username')
  public async deleteGitHubUser(
    @Param('username') username: string,
  ): Promise<any> {
    const deletedUser = await this.appService.deleteCacheEntry(username);
    return deletedUser !== undefined
      ? deletedUser
      : {
          success: `User with username '${username}' does not exist in the cache.`,
        };
  }

  @Post('reset')
  public resetCache(): any {
    this.appService.resetCache();
    return {
      success: `You now have a fresh cache with capacity of ${this.appService.getCacheCapacity()}`,
    };
  }
}
