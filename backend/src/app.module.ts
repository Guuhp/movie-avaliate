import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie/entities/movie.entity';
import { MovieModule } from './movie/movie.module';
import { Score } from './score/entities/score.entity';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'movie_avaliate',
      entities: [Movie, Score],
      synchronize: true,
      logging: true,
    }), MovieModule, ScoreModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
