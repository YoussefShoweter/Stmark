import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/modules/sign-in/components/sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
   Alertmes():number{
    console.log("OOpsie");
return 76
  }

}
