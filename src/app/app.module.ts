import { ReadMovieComponent } from './dashboard/read-movie/read-movie.component';
import { MoviedetailsComponent } from './dashboard/moviedetails/moviedetails.component';
import { AddMovieComponent } from './dashboard/add-movie/add-movie.component';
import { MoviesComponent } from './dashboard/movies/movies.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DashboardModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      {path: 'movies', component: MoviesComponent},
      {path: 'addmovie', component: AddMovieComponent},
      {path: 'readmovie', component: ReadMovieComponent},
      {path: 'updatemovie/:id', component: MoviedetailsComponent},
      {path: '', component: MoviesComponent},
      {path : '**', redirectTo: '/', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
