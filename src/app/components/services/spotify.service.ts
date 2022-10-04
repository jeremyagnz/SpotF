import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${environment.url}${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBrszHd3Yws8lX-LjnXJU9V1skglkS05TqNsqYN5-779FjiqjYXndv-xQcukNe28Db6n23lV2HCXQzPCB0mDkXX1dW2Hx-rWMs2EJw-3sCGb_q8wz4',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data['albums'].items;
      })
    );
  }

  getArtista(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=15`
    ).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }
}
