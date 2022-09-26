
import { Component, OnInit } from '@angular/core';
import { Token } from '../models/countries.model';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    
  ]
})
export class HomeComponent {
  newReleases: any[] = []

  constructor(private spotify:SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe ( (data:any )=> {
      console.log(data.albums.items);
      this.newReleases = data.albums.items;
    });
  }
  


  
}

