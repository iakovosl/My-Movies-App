import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { features } from 'process';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies', 
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  
  selectedMovie: Movie;

  movies: Movie[];

  @Input("criteria")  criteria: any;

  name = new FormControl('');
  
  
constructor(private movieService: MovieService) { }


  ngOnInit(): void { 
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

 
  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }
  
}
