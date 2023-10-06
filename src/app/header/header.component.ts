import { Component } from '@angular/core';
import { PreferencesService } from '../common/services/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public _preferencesService : PreferencesService){
    
  }

}
