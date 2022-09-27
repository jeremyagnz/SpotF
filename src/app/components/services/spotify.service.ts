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
        'Bearer BQAC9uVLR4eTm2VcD-YXaotG9C2L_q8e9ZqAHoHFBcSzl0M2tC1G6KsDGWhUEYdD8EAfSbyx_qaP4QAY23JgIHtfcXE9KIBNTtGZ1f58yEnJKh744Gw',
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
