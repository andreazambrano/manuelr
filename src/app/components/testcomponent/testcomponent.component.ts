import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Item } from '../../models/item-interface'; 
import {ITEMS} from './mock-data';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
public user : UserInterface ={
        name:"",
        email:"",
        password:"",
        usertype:"",
        status:"",
      };
  suscriber = {
 name:"",
        email:"",
        usertype:"",
        password:"",
        response:"",
        status:"",

  };
  number=0;

       // public suscriber:any[]=[];
  constructor(
        private authService: AuthService,
    private formBuilder: FormBuilder,
    public _uw:UserWService,
    public dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) {


     }


 ngFormRegister: FormGroup;
    submitted = false;
    public isError = false;
    public waiting = false;
    public msgError = '';

public aleatorio(a,b) {
  this.number=0;
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

onRegister(){
    if (this.ngFormRegister.valid){
      //this.waiting=true;
      this.suscriber.status='new';
      this.suscriber.name=this.user.name;
      this.suscriber.email=this.user.email;
      this.suscriber.usertype='suscriber';
      this.suscriber.response="response text"; 
      this.suscriber.usertype='suscriber';
      this.number=this.aleatorio(10000,99999);
      let suscriberIdString = this.number.toString();
      this.suscriber.password=suscriberIdString;
      this._uw.suscriber=this.suscriber;
      this._uw.steep1=true;
      this.router.navigate(['/question']);
    } else {
      this.onIsError();
    }
  }
  ngOnInit() {
            this.ngFormRegister = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
    });
  }

  get fval() {
  return this.ngFormRegister.controls;
  }
   onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
