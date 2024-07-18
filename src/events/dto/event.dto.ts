import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  // @IsDate()
  // @IsNotEmpty()
  // readonly date: Date;

  @IsString()
  @IsNotEmpty()
  readonly location: string;
}

export class UpdateEventDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly description?: string;

  @IsDate()
  readonly date?: Date;

  @IsString()
  readonly location?: string;
}
