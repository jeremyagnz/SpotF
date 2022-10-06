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
        'Bearer BQC13M9RXbF7GS_Zf_5zdr1cIBMtuQBZM2x0ah0GVq5Wv4owMNPkZFyy8gSrVbJZxCPhBuRvGKT-t2PtY2wfB5RHIbQ3A6Y7Lg5cpOYD__x67kJdA3w',
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
      `search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`
    ).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }
}
