import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }

  transform(value: string): any {

    const uri = "https://open.spotify.com/embed?uri="
    return this.domSanitizer.bypassSecurityTrustResourceUrl(uri + value);
  }

}
