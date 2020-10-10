import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(criteria): Movie[] {
      if (criteria) {
        return MOVIES.filter(movie => movie.featured)
      } else {
        return MOVIES
      }
    
  
}
  
 
  constructor() { }
}
