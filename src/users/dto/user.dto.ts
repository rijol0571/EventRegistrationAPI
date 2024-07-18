import { IsString, IsEmail, IsBoolean, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../common/constants';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isActive: boolean;

  @IsEnum(UserRole)
  @IsNotEmpty()
  readonly role: UserRole;
}

export class UpdateUserDto {
  @IsString()
  readonly name?: string;

  @IsEmail()
  readonly email?: string;

  @IsString()
  readonly password?: string;

  @IsBoolean()
  readonly isActive?: boolean;

  @IsEnum(UserRole)
  readonly role?: UserRole;
}


// export class CreateUserDto {
//   name: string;
//   email: string;
//   password: string;
//   isActive: boolean;
//   role: string;
//   username: string;

// }

// export class UpdateUserDto {
//   name?: string;
//   email?: string;
//   password?: string;
//   isActive?: boolean;
//   role?: string;
//   username?: string;
// }

