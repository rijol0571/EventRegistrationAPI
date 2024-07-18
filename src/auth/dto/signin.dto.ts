// export class SignInDto {
//     readonly username: string;
//     readonly password: string;
//   }
  
import { IsString, IsEmail } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
