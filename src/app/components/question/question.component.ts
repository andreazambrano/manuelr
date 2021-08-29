import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

import { Item } from '../../models/item-interface'; 
import {ITEMS} from './mock-data';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

import { UserInterface } from '../../models/user-interface'; 
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
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
      submitted = false;
    public isError = false;
    public waiting = false;
    public msgError = '';
   title = 'app';
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = ITEMS;
  constructor(
        private authService: AuthService,

    public _uw:UserWService,
    public dataApi: DataApiService,
private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) {

 this.itemsList = ITEMS;
      this.radioSelected = "C";
      this.getSelecteditem();
 }
  getSelecteditem(){
      this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
     // this.radioSelectedString = JSON.stringify(this.radioSel);
      this._uw.suscriber.response = JSON.stringify(this.radioSel);
    }

    onItemChange(item){
      this.getSelecteditem();
    }
    ok(){

    	 this.authService
        .registerUser(
          this._uw.suscriber.name, 
          this._uw.suscriber.email, 
          this._uw.suscriber.response, 
          this._uw.suscriber.usertype, 
          this._uw.suscriber.status, 
          this._uw.suscriber.password
          )
        .subscribe(user => {
          this._uw.suscriber=user;
          this.authService.setUser(user);
          const token = user.id;
          this._uw.userd=token;  
          this.authService.setToken(token);
           this.router.navigate(['/thank']);
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
    }
       onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

     
  ngOnInit() {
    if(!this._uw.steep1){
 this.router.navigate(['']);

    }
  	    	this.suscriber=this._uw.suscriber;
  }
    

}
