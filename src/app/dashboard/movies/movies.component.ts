import { MovieService } from './../movie.service';
import { Imovies } from './../imovies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies: Imovies[];
  constructor(private movieservice: MovieService) {
    this.movieservice.getMovies().subscribe(response => {
      this.movies = response;
   });
  }
  ngOnInit() {}

}
