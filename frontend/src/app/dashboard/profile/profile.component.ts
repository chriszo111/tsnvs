import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  isAuthenticated: boolean;
  user$: any;
  httpHeaders: HttpHeaders;
  showTitle: boolean;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    if(this.isAuthenticated) {
      // Get current user access token
      const accessToken = this.oktaAuth.getAccessToken().accessToken;
    }

    // Prepare httpHeaders
    this.httpHeaders = new HttpHeaders({'Authorization': 'SSWS ' + accessToken})
      .set('Content-Type', 'application/json').set('Accept', 'application/json');

    // Get user information
    const userInfo = this.oktaAuth.getOktaAuth().token.getUserInfo(accessToken);
    // Get user profile information of logged in user through GET
    this.user$ = this.http.get('https://dev-713629.oktapreview.com/api/v1/users/me', {headers: this.httpHeaders}).toPromise();
    console.log('user$' + this.user$);
    console.log('userInfo: ' + userInfo);
    // Show the full title
    this.showTitle = true;
  }

  changePassword() {
    console.log('changePassword() called');
  }

  toggleTitle() {
    if(this.showTitle) {
      this.showTitle = false;
    } else {
      this.showTitle = true;
    }
  }

}
