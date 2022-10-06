
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
  loading:boolean;

  constructor(private spotify:SpotifyService) {
    
    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe ( data => {
      this.newReleases = data;
      this.loading = false;
    });
  }
  


  
}

