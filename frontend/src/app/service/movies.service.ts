import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { Score } from '../model/score';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  selectedMovie?: Movie;

  BASEURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  save(score: Score): Observable<Score> {
    return this.http.post<Score>(`${this.BASEURL}score`, score, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updateMovie(id: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.BASEURL}movie/${id}`, movie)
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASEURL + 'movie')
  }

  getMovieID(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.BASEURL + 'movie/' + id)
  }

  selectHero(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
