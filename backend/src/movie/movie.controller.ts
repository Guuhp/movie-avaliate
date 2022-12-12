import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }


  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createMovieDto: CreateMovieDto) {
    return this.movieService.update(id, createMovieDto)
  }
}
