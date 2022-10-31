import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signupuser } from '../../../models/Signup';
import { sign_UpService } from '../../../services/person.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  User: signupuser = new signupuser;
  UserBinded :signupuser=new signupuser;
  @Output() CreatedUsers = new EventEmitter<signupuser[]>();
  constructor(private sign_UpService1:sign_UpService) { }
  persons: signupuser[]=[];
  ngOnInit(): void {
   this.sign_UpService1.getPerson().subscribe((result: signupuser[])=>(this.persons=result));
  }
  GetSignUpdata(nationalid:string,phone:string,first:string,second:string,adress:string,email:string){
this.User.Address=adress;
this.User.id=nationalid;
this.User.phonenumber=phone;
this.User.firstname=first;
this.User.LastName=second
this.User.email=email
let x:signupuser;
let checker:boolean=false;

    for(x  of (this.persons)){
      if(x.id==nationalid)
      {alert("NationalID is already in use "+ x.id)
        checker=true;
        break;}
    }
    if(checker==false){
      this.CreateUser(this.User);
      alert("Signup Successfully")
    }
}
CreateUser(user:signupuser){
  this.sign_UpService1
  .CreateUser(user)
  .subscribe((Users:signupuser[]) => this.CreatedUsers.emit(Users));

}
GetUserSignUpData(){
console.log(this.UserBinded)
}

}
