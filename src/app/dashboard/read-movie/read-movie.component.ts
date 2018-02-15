import { Imovies } from './../imovies';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../movie';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-read-movie',
  templateUrl: './read-movie.component.html',
  styleUrls: ['./read-movie.component.css']
})
export class ReadMovieComponent implements OnInit {
movie: Movie = new Movie();
movies: Imovies[];
  constructor(private movieservice: MovieService) { }

  ngOnInit() {
  }
  show(moviedet: NgForm)
  {
    //console.log(moviedet);
    this.movieservice.getMovie(moviedet).subscribe(response => {
      this.movies = response;
    });
  }
}
