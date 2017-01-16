import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../models/movie';

@Component({
  selector: 'home-component',
  templateUrl: 'home.html'
})
export class HomeComponent {

  movies: Movie[] = [];

  constructor(private navCtrl: NavController, private moviesService: MoviesService) { }

  findAll() {
    this.clear();
    this.moviesService.findAll().subscribe(movie => {
      this.movies.push(movie);
    });
  }
  
  clear() {
    this.movies = [];
  }

}