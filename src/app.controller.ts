import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ReInstantiateDto } from './data-transfer-object/re-instantiate.dto';
import { SuccessDto } from './data-transfer-object/success.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public health(): SuccessDto {
    return new SuccessDto(`I'm alive!`);
  }

  @Post('/re-instantiate')
  public reInstantiate(@Body() dto: ReInstantiateDto): SuccessDto {
    this.appService.reInstantiateCache(dto.capacity);
    return new SuccessDto(
      `You now have a fresh cache with capacity of ${this.appService.getCacheCapacity()}`,
    );
  }

  @Get(':username')
  public async getGitHubUser(
    @Param('username') username: string,
  ): Promise<SuccessDto> {
    return new SuccessDto(
      `User with username '${username}' has been fetched and cached successfully.`,
      await this.appService.fetchAndCacheGitHubUser(username),
    );
  }

  @Delete(':username')
  public async deleteGitHubUser(
    @Param('username') username: string,
  ): Promise<SuccessDto> {
    const deletedUser = await this.appService.deleteCacheEntry(username);
    const message =
      deletedUser !== undefined
        ? `User with username '${username}' has been removed successfully.`
        : `User with username '${username}' does not exist in the cache.`;

    return new SuccessDto(message, deletedUser);
  }

  @Post('reset')
  public resetCache(): SuccessDto {
    this.appService.resetCache();
    return new SuccessDto(
      `You now have a fresh cache with capacity of ${this.appService.getCacheCapacity()}`,
    );
  }
}
