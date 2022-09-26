import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_c70a5PDnY0lJP6qPMVSVB4Ze0nFe1c5-OXnHNQfBgOR19ozoh_OZhvF2k1poCinhEQpJ-Vz-fY8nNZ8w5EbYKv80qZhSr4Ki_OzHYrIlsnPrZnA',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
  
  getArtista(termino:string){
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_c70a5PDnY0lJP6qPMVSVB4Ze0nFe1c5-OXnHNQfBgOR19ozoh_OZhvF2k1poCinhEQpJ-Vz-fY8nNZ8w5EbYKv80qZhSr4Ki_OzHYrIlsnPrZnA',
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=15`, { headers });
  }
}
