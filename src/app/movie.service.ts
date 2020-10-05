import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Movie[] {
  return MOVIES;
  }
 
  constructor() { }
}
