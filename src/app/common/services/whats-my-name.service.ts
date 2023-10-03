import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsMyNameService {

  myNameIs : string = "SlimShady";

  constructor() { }
}
