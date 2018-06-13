import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.component.html',
  styles: []
})
export class PrivacyComponent implements OnInit {

  showTitle: boolean;

  constructor() { }

  ngOnInit() {
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
