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
        'Bearer BQAvX0s6BdcWzunfPB7tKbfZPTipwpxcex_YWZR-44WO3xKWpHRr3jxHq5adH2oIk6yo22a9PqMCaejHz0KwyrHaAKeTGlYEqethu_E5wYj7Dl7GRqY',
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

  getArtistas(termino:string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`
    ).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }

  getArtista( id:string) {
    return this.getQuery(`artists/${ id }`);
    /* .pipe(map((data: any) => {
        return data['artists'].items;
      })
    ); */
  }
}
