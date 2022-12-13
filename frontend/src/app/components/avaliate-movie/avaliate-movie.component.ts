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

  movies!: Movie
  score: Score[] = []
  num?: number
  url?: string

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id')!);
    this.getMovieId(id)


  }

  randomIMG(): void {
    this.num = Math.random() * 1000
    this.url = `https://avatars.alphacoders.com/avatars/view/${this.num}`
  }

  getMovieId(id: string): void {
    this.movieService.getMovieID(id).subscribe((data: Movie) => {
      this.movies = data;
      data.scores?.forEach((p) => {
        this.score.push(p)
      })
      console.log(this.movies);

    })
  }

  openDialog(score: Score | null): void {
    const dialogRef = this.dialog.open(DialogMovieComponent, {
      width: '250px',
      data:
        score === null
          ? {
            email: '',
            score: '',
          }
          : {
            id: score.id,
            name: score.username,
            status: score.score,
          },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.movieService.save(result).subscribe({
        next: (a) => {
          this.score.push(a)
          this.movies.scores?.push(a)
          console.log(this.movies);

          this.movieService.updateMovie(this.movies.id as string, this.movies)
            .subscribe((data: Movie) => {
              this.movies = data
            })
        }
      })
    })

  }
}
