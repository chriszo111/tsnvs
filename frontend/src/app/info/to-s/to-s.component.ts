import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-s',
  templateUrl: 'to-s.component.html',
  styles: []
})
export class ToSComponent implements OnInit {
  showTitle: boolean;

  constructor() { }

  ngOnInit() {
    // Show full title on startup
    this.showTitle = true;
  }

  toggleTitle() {
    if(this.showTitle) {
      this.showTitle = false;
    } else {
      this.showTitle = true;
    }
  }

}
