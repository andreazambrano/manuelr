import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yp',
    templateUrl: './yp.component.html',

  styleUrls: ['./yp.component.css']
})
export class YpComponent implements OnInit {
  player: YT.Player;
  private id: string = 'DYF5FjMb9Cg';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
