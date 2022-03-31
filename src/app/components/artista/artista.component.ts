import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any = {};
  loading:boolean;
  topTracks:any[] = [];

  constructor( private router:ActivatedRoute,
               private spotify:SpotifyService ) {

    this.router.params.subscribe(param => {

      this.getArtist(param['id']);
      this.getTopTracks(param['id']);
      

    })
  }

  getArtist(id:string){

    this.loading = true

    this.spotify.getArtist(id).subscribe(artista => {

      this.artista = artista
      //console.log(this.artista);

      this.loading = false
      
      

    })

  }

  getTopTracks(id:string){

    this.spotify.getTopTracks(id).subscribe(topTracks => {

      this.topTracks = topTracks
      console.log(this.topTracks);
      
      

    })

  }

}
