import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  selectedMovie?: Movie;

  BASEURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

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
