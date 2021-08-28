import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(
private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
