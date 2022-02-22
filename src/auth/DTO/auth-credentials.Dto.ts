import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class authCredentialsDto {
  @IsString()
  username;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  name;
  @IsString()
  lastName;
  @IsString()
  gender;
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too Weak',
  })
  password: string;
}
