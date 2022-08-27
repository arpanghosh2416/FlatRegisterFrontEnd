import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errormessage:boolean=false;
  UserSignIn=new FormGroup({
    uname:new FormControl('',[Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

  user(){
    if(this.isformValid()) console.log("sign in done");
    else{
       console.log("Error found");
       this.errormessage=true;
    }
  }
  
  public get uname() : FormControl {
    return this.UserSignIn.get("uname") as FormControl
  }
  isformValid(): boolean {
    if(this.uname.errors!=null) return false;
    return true;
}
}
