import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: 'postgres://lonqnzct:Zl5qVBy6LVIldmBUxtqkmVdcmmf_gh4E@arjuna.db.elephantsql.com/lonqnzct',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [User],
    }),
  ],
})
export class AppModule {}
