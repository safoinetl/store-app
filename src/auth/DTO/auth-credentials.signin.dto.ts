import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class authSignInDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
