import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-secure',
  templateUrl: 'dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean;
  showTitle: boolean;

  constructor(private oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Show the full title
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
