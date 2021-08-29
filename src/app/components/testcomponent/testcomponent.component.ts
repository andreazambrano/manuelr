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
        usertype:"",
        password:"",
        status:"",
      };
  suscriber = {
 name:"",
        email:"",
        usertype:"",
        response:"",
        password:"",
        status:"",

  };
  number=0;
   title = 'app';
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = ITEMS;
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
 this.itemsList = ITEMS;
      this.radioSelected = "item_3";
      this.getSelecteditem();

     }

   getSelecteditem(){
      this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
    }

    onItemChange(item){
      this.getSelecteditem();
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

// public savePatient(patient){
//      return this.dataApi.savePatient(this.suscriber)
//         .subscribe(
//              patientSubmit => this.router.navigate(['/thank'])
//         );
//         this.waiting=false;
// }
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
         
      // this.authService
      //   .registerUser(
      //     this.user.name, 
      //     this.user.email, 
      //     this.suscriber.response, 
      //     this.suscriber.usertype, 
      //     this.suscriber.status, 
      //     this.suscriber.password
      //     )
      //   .subscribe(user => {
      //     this._uw.suscriber=user;
      //     this.authService.setUser(user);
      //     const token = user.id;
      //     this._uw.userd=token;  
      //     this.authService.setToken(token);
      //   },
      //   res => {
      //     this.msgError = res.error.error.details.messages.email;
      //     this.onIsError();
      //   });
      this.suscriber.usertype='suscriber';
      this._uw.suscriber=this.suscriber;
       this.router.navigate(['/question']);
      setTimeout(() => {
      this.isError = false;
//      this.savePatient(this.suscriber);
    }, 5000);
   

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
