import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  readonly paymentMethod: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  // @IsString()
  // @IsNotEmpty()
  // readonly date: Date;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}

export class UpdatePaymentDto {
  @IsString()
  readonly paymentMethod?: string;

  @IsNumber()
  readonly amount?: number;

  @IsDate()
  readonly date?: Date;

  @IsString()
  readonly userId?: string;
}
