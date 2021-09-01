import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { TixInterface } from '../../models/tix-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Item } from '../../models/item-interface'; 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 public tix:TixInterface;
    public tixs:TixInterface;
  constructor(
private authService: AuthService,
    private formBuilder: FormBuilder,
    public _uw:UserWService,
    public dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router
  	) { }
     getCourseDetail(id: string){
    this.dataApi.getCourseDetailById(id).subscribe(tix => (this.tix = tix)); 
  }
 getAllTixs(){
        this.dataApi.getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
       // console.log("hey");
       }else{
        this.tixs=res;            
        }
     });  
    }
  ngOnInit() {
          this.getAllTixs();
          
  }

}
