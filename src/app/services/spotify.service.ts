import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

    console.log('Spotify service listo!!!');
    

  }

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQDYsJUa24ldWNIJ8g6YSe5QD2f5L6xTZbgw0nKu0R5XwCHR_vggSR31lkKkurGvycgP5QqdfmdA8MXOlVA'

    });

    return this.http.get(url, {headers})

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe(map(data => data['albums'].items))


  }

  getArtists(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items))

  }

  getArtist(id:string){

    return this.getQuery(`artists/${id}`)
    
  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => {
      return data['tracks']
    }))

  }

}