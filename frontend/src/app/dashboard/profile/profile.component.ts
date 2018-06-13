import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  isAuthenticated: boolean;
  userProfile: any;
  httpHeaders: HttpHeaders;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    // Prepare httpHeaders
    this.httpHeaders = new HttpHeaders({'Authorization': 'SSWS 00O_-EtFuB3EMJTrbnwEMGut4FQzB1X5UnlVQHlHpC'})
      .set('Content-Type', 'application/json').set('Accept', 'application/json');
  }

  async ngOnInit() {
    // Get user profile information of logged in user through GET
    this.userProfile = await this.http.get('https://dev-713629.oktapreview.com/api/v1/users/me', {headers: this.httpHeaders})
      .toPromise();
    console.log(this.userProfile);
  }

}
