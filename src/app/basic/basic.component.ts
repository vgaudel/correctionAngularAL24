import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  username : string = "";
  message : string = "Je ne connais pas encore votre nom";

  onAction():void{
    this.message = "Hello " + this.username;
  }

  
}
