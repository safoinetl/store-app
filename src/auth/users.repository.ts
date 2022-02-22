import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { authCredentialsDto } from './DTO/auth-credentials.Dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: authCredentialsDto): Promise<void> {
    const { username, email, name, lastName, gender, password } =
      authCredentialsDto;
    //hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      email,
      name,
      lastName,
      gender,
      password: hashedPassword,
    });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
