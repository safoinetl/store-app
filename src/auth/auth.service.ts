import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialsDto } from './DTO/auth-credentials.Dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { authSignInDto } from './DTO/auth-credentials.signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}
  async signup(authCredentialsDto: authCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
  async signin(authSignInDto: authSignInDto): Promise<{ accessToken: string }> {
    const { email, password } = authSignInDto;
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new UnauthorizedException('check your infos');
  }
}
