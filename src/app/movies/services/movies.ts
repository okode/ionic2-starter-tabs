import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeAll';
import { ConfigService } from '../../core/services/config';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

    constructor(private configService: ConfigService, private http: Http) { }

    findAll():Observable<Movie> {
        let config = this.configService.getConfig();
        console.log('MoviesService using environment: ' + this.configService.getEnvironment());
        return this.http
            .get(`${config.omdbApiBaseUrl}/?s=Batman`)
            .map(res => res.json().Search)
            .mergeAll();
    }
}
