import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { SaleInterface } from '../models/sale-interface';
import { OrderInterface } from '../models/order-interface';
import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

import { CategoryInterface } from '../models/category-interface';
import { SuscriberInterface } from '../models/suscriber-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	categories: Observable<any>;
	category:Observable<any>;
	info: Observable<any>;
	tixs: Observable<any>;
	tix: Observable<any>;
	sale: Observable<any>;
	order: Observable<any>;
	suscriber: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization: this.authService.getToken()
  		});
  		saveSuscriber(suscriber :SuscriberInterface){
		const url_api='https://db.buckapi.com:3062/api/suscriber';
		return this.http
		.post<SuscriberInterface>(url_api, suscriber)
		.pipe(map(data => data));
	}
		getCourseDetailById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3062/api/tixes/${indice}`;
		this.tix = this.http.get(url_api);
		return (this.tix);
	}
	
  	updateTix(tix :TixInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3062/api/tixes/${id}`;
		return this.http
		.put<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	getAllTixs(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}


		getAllTixsReturn(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
		getAllCategories(){
		const url_api = 'https://db.buckapi.com:3062/api/categories?filter[where][status]=activated';
		return this.http.get(url_api);
	}
 		getTamano(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getTamanoIni(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][initload]=activated';
		return (this.tixs = this.http.get(url_api));
	}
 	

	getAllTixsInitload(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][initload]=activated';
		return this.http.get(url_api);
	}
	getInfo(){
		const url_api=`https://db.buckapi.com:3062/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	saveSale(sale :SaleInterface){
		const url_api='https://db.buckapi.com:3062/api/sale';
		return this.http
		.post<SaleInterface>(url_api, sale)
		.pipe(map(data => data));
	}
	saveOrder(order :OrderInterface){
		const url_api='https://db.buckapi.com:3062/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
sendMailNewBookAppToAdmin(book){
		const url_api='https://email.penguinscleaning.ca:3005/newBookAppToAdmin';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}

	sendMailSuscriptor(suscriber){
		const url_api='https://email.buckapi.com:3019/landing';
		return this.http
		.post(url_api, suscriber)
		.pipe(map(data => data));
	}
	
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3062/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	getOrderByNpedido(npedido: string){
		const url_api = `https://db.buckapi.com:3062/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}

		// let indice = id;
		// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}