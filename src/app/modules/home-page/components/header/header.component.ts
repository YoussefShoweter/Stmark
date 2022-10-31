import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/modules/sign-in/components/sign-in/sign-in.component';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor( private sign_inService1:sign_inService) { }
  showBut:boolean=this.sign_inService1.Signedin;
  FirstName :string =this.sign_inService1.FirstName = "Youssef";

  ngOnInit(): void {
  }
   Alertmes():number{
    console.log("OOpsie");
return 76
  }

}
