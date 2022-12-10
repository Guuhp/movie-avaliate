import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { Score } from 'src/app/model/score';
import { MoviesService } from 'src/app/service/movies.service';
import { DialogMovieComponent } from '../dialog-movie/dialog-movie.component';

@Component({
  selector: 'app-avaliate-movie',
  templateUrl: './avaliate-movie.component.html',
  styleUrls: ['./avaliate-movie.component.css']
})
export class AvaliateMovieComponent {

  movies?: Movie
  score?: Score

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id')!);
    this.getMovieId(id)


  }

  getMovieId(id: string): void {
    this.movieService.getMovieID(id).subscribe((data: Movie) => {
      data.scores?.forEach((i) => {
        this.score = i
      })
      this.movies = data;
    })
  }

  openDialog(taskz: Score | null): void {
    const dialogRef = this.dialog.open(DialogMovieComponent, {
      width: '250px',
      data:
        taskz === null
          ? {
            name: '',
            status: undefined,
          }
          : {
            id: taskz.id,
            name: taskz.email,
            status: taskz.score,
          },
    });


  }
}
