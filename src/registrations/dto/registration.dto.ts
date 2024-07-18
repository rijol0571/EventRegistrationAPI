import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  @IsNotEmpty()
  readonly eventName: string;

  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  @IsDate()
  @IsNotEmpty()
  readonly registrationDate: Date;
}

export class UpdateRegistrationDto {
  @IsString()
  readonly eventName?: string;

  @IsString()
  readonly userName?: string;

  @IsDate()
  readonly registrationDate?: Date;
}
