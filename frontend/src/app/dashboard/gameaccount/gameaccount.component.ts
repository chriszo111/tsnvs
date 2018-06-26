import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { OktaAuthService } from "@okta/okta-angular";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-gameaccount',
  templateUrl: 'gameaccount.component.html',
  styles: []
})
export class GameaccountComponent implements OnInit {
  private showTitle: boolean;

  constructor(private http: HttpClient, private router: Router, private oktaAuth: OktaAuthService) { }

  ngOnInit() {
    this.showTitle = false;
  }

  toggleTitle() {
    if(this.showTitle) {
      this.showTitle = false;
    } else {
      this.showTitle = true;
    }
  }

}
