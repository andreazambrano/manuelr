import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { CategoryInterface } from '../../models/category-interface'; 
import { UserWService } from "../../services/user-w.service";
import { CarouselModule } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-shadidiscount',
  templateUrl: './shadidiscount.component.html',
  styleUrls: ['./shadidiscount.component.css']
})
export class ShadidiscountComponent implements AfterViewInit {   title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  };


  constructor(
  private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService
    ) { }

public categories:CategoryInterface;
public category:CategoryInterface;
public tixs:TixInterface;
public tix:TixInterface;
    url = "assets/assetsshadi/js/vendor/vendor.min.js";
  url1 = "assets/assetsshadi/js/plugins/slick.js";
  url2 = "assets/assetsshadi/js/plugins/plugins.min.js";
  url3= "assets/assetsshadi/js/main.js";


   loadAPI = null;  
 public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
    public loadScript1() {
    let node = document.createElement("script");
    node.src = this.url1;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }   
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }   
  public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 

getAllTixs(){
        this.dataApi.getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.tixs=res;            
        }
     });  
    }

  ngAfterViewInit() {

     if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript1();
        this.loadScript2();
        this.loadScript3();
       
        });
      }
      this._uw.loaded=true;
    this.getAllTixs();
$(document).ready(function(){
$('.hot-deal-slider-wrapper').slick({
 infinite: true,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
        speed: 800,
        cssEase: 'linear',
        dots: false,
        responsive: [{
                breakpoint: 992,
                Settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                Settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                Settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
});
});
    
  }

}
