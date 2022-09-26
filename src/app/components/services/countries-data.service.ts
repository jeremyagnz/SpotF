import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {

  constructor(private http: HttpClient) { }

  getDataCountries(){
    this.http.get(`${environment.url}/v2/lang/es`).subscribe(contries =>{
      console.log(contries);
    })
  }
}
