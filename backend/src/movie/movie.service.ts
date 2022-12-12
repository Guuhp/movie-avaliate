import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from 'src/score/entities/score.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: string) {
    return this.movieRepository.findOneBy({ id });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movie = await this.findOne(id)
    movie.image = updateMovieDto.image;
    movie.title = updateMovieDto.title;
    movie.sinopse = updateMovieDto.sinopse;
    movie.scores = updateMovieDto.scores;
    return this.movieRepository.save(movie);
  }

}
