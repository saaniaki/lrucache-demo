import { Expose } from 'class-transformer';

export class SuccessDto {
  @Expose()
  public message: string;

  @Expose()
  public data: any;

  public constructor(successMessage: string, data: any = null) {
    this.message = successMessage;
    this.data = data;
  }
}
