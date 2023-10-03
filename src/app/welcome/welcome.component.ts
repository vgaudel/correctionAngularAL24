import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WhatsMyNameService } from '../common/services/whats-my-name.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  variableAEnvoyer : string = "parent-welcome";
  username : string ;


  constructor(route: ActivatedRoute, public _whatsMyNameService : WhatsMyNameService){
    this.username = route.snapshot.params['username'];
    
    //console.log(this.username)
  }

}
