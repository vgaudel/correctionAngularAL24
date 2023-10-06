import { Component } from '@angular/core';
import { WhatsMyNameService } from '../common/services/whats-my-name.service';
import { PreferencesService } from '../common/services/preferences.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  listeCouleurs : string[] = [ "lightyellow", "white",
  "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;  

  constructor (public _whatsMyNameService : WhatsMyNameService, public _preferencesService : PreferencesService){
    
  }

}
