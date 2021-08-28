import { Component, OnInit } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";
import { SwUpdate } from '@angular/service-worker';
// declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor (
  public _ps:TixsService, 
  public _pi:ProductInfoService, 
  public ipbucket:IpbucketService,
  public _uw:UserWService, 
  private swUpdate:SwUpdate,
  public dataApi:DataApiService){

 }
 loadAPI = null;  
   // url = "assets/assetsfruit/js/scripts.js";
    ngOnInit() {

      if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("CSS tiene nuevas mejoras. desea cargar esta nueva versión?")) {
                    window.location.reload();
                }
            });
        }    


     // if (this._uw.loaded==true){
    //       this.loadAPI = new Promise(resolve => {
    //         this.loadScript();
    //       });
    //     }
        this._uw.loaded=true;
  }
 // public loadScript() {
 //      let node = document.createElement("script");
 //      node.src = this.url;
 //      node.type = "text/javascript";
 //      node.async = true;
 //      node.charset = "utf-8";
 //      document.getElementsByTagName("head")[0].appendChild(node);
 //    }
}
