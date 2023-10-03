import { Component } from '@angular/core';
import { User } from 'src/app/common/data/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user : User = new User();

  public message :string ="" ;

  public onSave(){
    this.message = "user = " + JSON.stringify(this.user);
  }

  public onFetchFromUsername(){
    let username=this.user.username;
    this.user=new User(null,username,"firstName_of_"+username , "lastName_of_"+username , username + "@worldcompany.com" , null , "user_of_sandboxrealm")
  }

}
