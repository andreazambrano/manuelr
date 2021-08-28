import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TixsService {

 loadedProducts:boolean=false;
  AllLoadedProducts:any={};
  products:any[]=[];
  productsFil:any[]=[];
  loadedCategorys:boolean=false;
  AllLoadedCategorys:any={};
  categorys:any[]=[];
  imagesG:any[]=[];
  constructor(public http:Http) { 
 		//this.loadInfo2();  
  	}
  public loadInfo2(){
  	this.http.get("https://www.busakapp.com:1350/product")
    .subscribe(data =>{
  	  this.loadedProducts=true;
  	  this.AllLoadedProducts=data.json();
  	  this.products=this.AllLoadedProducts.results;   
      for (var i=0;i<this.products.length;i++){
        this.products[i].image="https://www.busakapp.com/web/"+this.products[i].images[0];
        this.products[i].imagesG=[];
        if(this.products[i].images.length<2){
          this.products[i].image="https://www.busak.com/assets/images/logo/logo-black-color-1.png";
          this.products[i].imagesG[0]=this.products[i].image;
        }
        else{
          for (var j=0;j<this.products[i].images.length;j++){
            this.products[i].imagesG[j]="https://www.busakapp.com/web/"+this.products[i].images[j];
          }
        }
        this.products[i].categoryAll=[];
        for (var j=0;j<this.products[i].category.length;j++){
          this.products[i].category[j]=this.products[i].category[j].replace(/\s/g,"_");
          this.products[i].categoryAll=this.products[i].categoryAll+" "+this.products[i].category[j];
        }
      }
      for (var i=0;i<this.products.length;i++){
      if(this.products[i].status==true){
          this.productsFil.push(this.products[i]);
        }
      }
      this.products=this.productsFil;
    })
    
      this.http.get("https://www.busakapp.com:1350/category").subscribe(data =>{
      this.loadedCategorys=true;
      this.AllLoadedCategorys=data.json();
      this.categorys=[];
      this.categorys=this.AllLoadedCategorys.results;
      for (var i = 0;i<this.categorys.length;i++){
        this.categorys[i].filter="."+this.categorys[i].name.replace(/\s/g,"_");
      }
    })
  }
}
