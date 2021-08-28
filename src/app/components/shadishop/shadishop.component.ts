import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { CategoryInterface } from '../../models/category-interface'; 
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-shadishop',
  templateUrl: './shadishop.component.html',
  styleUrls: ['./shadishop.component.css']
})
export class ShadishopComponent implements OnInit {

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

getAllTixs(){
        this.dataApi.getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.tixs=res;            
        }
     });  
    }


  ngOnInit() {
          this.getAllTixs();
  }

}
