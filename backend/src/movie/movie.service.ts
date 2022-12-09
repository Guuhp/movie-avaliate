import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from 'src/score/entities/score.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) { }

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  findScore() {
    const score = this.movieRepository
      .createQueryBuilder('Score')
      .select(['`Score`.`moviesId`'])
      .getOne()
    console.log(score);

  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: string) {
    return this.movieRepository.findOneBy({ id });
  }
}
