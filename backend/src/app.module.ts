import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Movie } from './movie/entities/movie.entity';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'movie_avaliate',
      entities: [Movie, User],
      synchronize: true,
      logging: true,
    }), UserModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
