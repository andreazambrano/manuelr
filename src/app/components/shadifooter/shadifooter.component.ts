import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { CategoryInterface } from '../../models/category-interface'; 
import { UserWService } from "../../services/user-w.service";
@Component({
  selector: 'app-shadifooter',
  templateUrl: './shadifooter.component.html',
  styleUrls: ['./shadifooter.component.css']
})
export class ShadifooterComponent implements OnInit {

  constructor(
  private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService

    ) { }

  ngOnInit() {
  }

}
