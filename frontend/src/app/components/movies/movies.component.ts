import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  dataSource!: Movie[]

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.dataSource = data;
    })

  }

  seletedMovie(movie: Movie): void {
    this.movieService.selectedMovie = movie;
  }
}
