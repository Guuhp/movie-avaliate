import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: number) {
    return this.movieRepository.findOneBy({id});
  }
}
