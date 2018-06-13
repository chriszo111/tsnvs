import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  logout() {
    this.oktaAuth.logout('/');
  }

}
