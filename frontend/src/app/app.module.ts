import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ListingComponent } from './page/listing/listing.component';
import { DialogMovieComponent } from './components/dialog-movie/dialog-movie.component';
import { AvaliateMovieComponent } from './components/avaliate-movie/avaliate-movie.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ListingComponent,
    DialogMovieComponent,
    AvaliateMovieComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
