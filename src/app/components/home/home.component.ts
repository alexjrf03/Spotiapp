import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean = false;
  mensajeError:string;

  constructor(private spotify:SpotifyService) { 

    this.loading = true

    this.spotify.getNewReleases().subscribe((data:any) => {

      this.nuevasCanciones = data
      this.loading = false

    }, (errorServivio) =>{

      this.loading=false
      this.error=true

      console.log(errorServivio);
      console.log(errorServivio.error.error.message);

      this.mensajeError = errorServivio.error.error.message
      

    });

  }



}
