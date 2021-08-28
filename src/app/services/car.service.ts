import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
	info:any={};
	loaded:boolean=false;
	car:any[]=[];
	size:number=0;
  constructor(public http:Http) { 
  	
  
  	}
  	public loadInfo(){  
	}
}