// export class SignUpDto {
//     readonly username: string;
//     readonly password: string;
//   }
import { IsString, IsEmail, MinLength } from 'class-validator';
import { CreateUserDto } from '../../users/dto/user.dto';

export class SignUpDto extends CreateUserDto {
    @IsEmail()
    email: string;
  
    @IsString()
    @MinLength(6)
    password: string;
  
    @IsString()
    username: string;
  }
  