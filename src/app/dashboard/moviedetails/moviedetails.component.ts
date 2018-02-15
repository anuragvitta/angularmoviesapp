import { Imovies } from './../imovies';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './../movie';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  id: number;
  sub: any;
  movies: Imovies[];
  movie: Movie = new Movie();
  constructor(private route: ActivatedRoute, private movieservice: MovieService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
      const id = Number(this.id);
      this.movieservice.getMovie({id: id}).subscribe(response => {
        this.movies = response;
        //console.log(response);
      });
});
  }
  show(moviedet: NgForm)
  {
    //console.log(moviedet);
    const id = this.id;
    const id1 = Number(id);
    moviedet['id'] = id1;
    console.log(moviedet);
    this.movieservice.updateMovie(moviedet).subscribe(response => {
      this.movies = response;
      this.router.navigate(['/']);
    });
  }
}
