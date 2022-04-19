import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  PUBLIC_KEY = '92ddea44aee274f90015fa9bcf5acb87';
  HASH = 'bdee048c20f60891139a4026830f0897';
  URL_API = 'https://gateway.marvel.com/';
  SUFIX = `ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<any> {
    const URL_CHARACTERS = `${this.URL_API}/v1/public/characters?${this.SUFIX}`;
    return this.http
      .get<any>(URL_CHARACTERS)
      .pipe(map((data: any) => data.data.results));
  }

  public getComicByUrl(url: string): Observable<any> {
    return this.http
      .get<any>(url + this.SUFIX)
      .pipe(map((data: any) => data.data.results));
  }
}
