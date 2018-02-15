
import { MovieService } from './movie.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ReadMovieComponent } from './read-movie/read-movie.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule , RouterModule
  ],
  declarations: [MoviesComponent, AddMovieComponent, MoviedetailsComponent, ReadMovieComponent],
  exports: [MoviesComponent, MoviedetailsComponent, AddMovieComponent],
  providers: [ MovieService ]
})
export class DashboardModule { }
