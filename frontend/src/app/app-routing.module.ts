import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliateMovieComponent } from './components/avaliate-movie/avaliate-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ListingComponent } from './page/listing/listing.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'movie/:id', component: AvaliateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
