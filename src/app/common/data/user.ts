export class User {
    constructor(
       public  id : string | null =null,
       public  username : string ="",
       public  firstName : string | null =null,
       public  lastName : string | null =null,
       public  email : string | null =null,
       public  newPassword : string | null =null,
       public  mainGroup : string | null =null
      ){}
}