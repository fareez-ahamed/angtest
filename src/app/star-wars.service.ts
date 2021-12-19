import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface FilmsResponse {
  count: number;
  next?: any;
  previous?: any;
  results: Film[];
}

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  films = new BehaviorSubject<Film[]>([]);
  text = 'new text';

  constructor(private http: ApiService) {
    this.fetchFilmList();
  }

  updateText() {
    this.text = 'Updated text';
  }

  fetchFilmList() {
    this.http
      .get<FilmsResponse>('https://swapi.dev/api/films')
      .subscribe((data) => {
        this.films.next(data.results);
        console.log('Response came');
        this.text = 'Updated from api response';
      });
  }

  get filmNames(): Observable<string[]> {
    return this.films.pipe(map((f) => f.map((x) => x.title)));
  }

  get filmCount(): Observable<number> {
    return this.films.pipe(map((fs) => fs.length));
  }
}
