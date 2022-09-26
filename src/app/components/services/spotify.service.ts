import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5qQ7kdtEItY1X-vZKRWfd0GprAmHtZglAa15BI8XblnzlowhHPFB87QMmK0ZnqfSlqRJ3CNSfCengJUMLI8HjZefIqS_zvr_ktNtqHzyXNwDbRyU',
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(
        map((data: any) => {
          return data['albums'].items;
        })
      );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5qQ7kdtEItY1X-vZKRWfd0GprAmHtZglAa15BI8XblnzlowhHPFB87QMmK0ZnqfSlqRJ3CNSfCengJUMLI8HjZefIqS_zvr_ktNtqHzyXNwDbRyU',
    });
    return this.http
      .get(
        `https://api.spotify.com/v1/search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=15`,
        { headers }
      )
      .pipe(
        map((data: any) => {
          return data['artists'].items;
        })
      );
  }
}
