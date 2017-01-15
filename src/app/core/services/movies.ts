import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import { EnvironmentService } from '../../shared/services/environment';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

    url = 'http://www.omdbapi.com/?s=Batman';

    constructor(private environmentService: EnvironmentService, private http: Http) { }

    findAll():Observable<Movie> {
		console.log('MoviesService using environment: ' + this.environmentService.currentName());
        return this.http
            .get(this.url)
            .map(res => res.json().Search)
            .mergeAll();
    }
}
