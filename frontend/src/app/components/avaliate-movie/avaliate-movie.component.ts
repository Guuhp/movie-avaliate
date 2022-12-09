import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-avaliate-movie',
  templateUrl: './avaliate-movie.component.html',
  styleUrls: ['./avaliate-movie.component.css']
})
export class AvaliateMovieComponent {

  movies?: Movie

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id')!);
    this.getMovieId(id)


  }

  getMovieId(id: string): void {
    this.movieService.getMovieID(id).subscribe((data: Movie) => {
      this.movies = data;

    })
  }

}
