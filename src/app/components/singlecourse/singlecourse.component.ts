import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-singlecourse',
  templateUrl: './singlecourse.component.html',
  styleUrls: ['./singlecourse.component.css']
})
export class SinglecourseComponent implements OnInit {

  constructor(
private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
