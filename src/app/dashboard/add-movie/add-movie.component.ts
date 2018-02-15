import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
movie: Movie = new Movie();
  constructor(private movieservice: MovieService, private router: Router) { }

  ngOnInit() {
  }
  show(moviedet: NgForm)
  {
    this.movieservice.addMovie(moviedet).subscribe(response => {
      //console.log(response);
      this.router.navigate(['/']);
    });
  }
}
