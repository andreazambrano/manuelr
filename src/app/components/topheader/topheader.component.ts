import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { UserInterface } from '../../models/user-interface'; 



import { UserWService } from "../../services/user-w.service";

import { DataApiService } from '../../services/data-api.service';



import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {
   ngFormLogin: FormGroup;
  submitted = false;
  constructor(

      public _uw:UserWService,
      private formBuilder: FormBuilder, 
      private dataApi: DataApiService,
      private authService: AuthService, 

    private location: Location,
    private route:ActivatedRoute,
    private router: Router

    ) { }
  public user : UserInterface ={
    name:"",
    email:"",
    password:"",
    usertype:""
  };
  public isError = false;
  public isLogged =false;

     onLogin(){
     this.submitted = true;
      if (this.ngFormLogin.invalid) {
      return;
        } 
//      alert('form fields are validated successfully!');
      return this.authService.loginUser(
        this.user.email, 
        this.user.password
        )
      .subscribe( 
        data => {
          //console.log(data);
              this.authService.setUser(data.user);
              const token = data.id;
              this.authService.setToken(token);
              this._uw.userd=data.id;
              this._uw.name=data.name;
              this._uw.userW=data.user;
              this._uw.isLogged=true;
              this.isError = false;
        },
         error => this.onIsError()
        ); 
  }   

  ngOnInit() {
      this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
      });
  }
    get fval() {
  return this.ngFormLogin.controls;
  }
   onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
