import { Body, Controller, Post, UseGuards } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { authCredentialsDto } from './DTO/auth-credentials.Dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { authSignInDto } from './DTO/auth-credentials.signin.dto';

@Controller('auth')
@UseGuards()
 // guards to protect the entire route and we can protect just a handler by use it the handler zone
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signup(@Body() authCredentialsDto: authCredentialsDto): Promise<void> {
    return this.authService.signup(authCredentialsDto);
  }
  @Post('/signin')
  signin(
    @Body() authSignInDto:authSignInDto,
  ): Promise<{ accessToken: string}> {
    return this.authService.signin(authSignInDto);
  }
}
