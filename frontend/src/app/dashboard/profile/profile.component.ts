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
  accessToken: string;
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
    console.log('Within ngOnInit()');

    this.user$ = this.oktaAuth.getUser();
    this.user$
      .then((res) => {
        console.log('user$ [oktaAuth.getUser().then(): ' + res);
      });
    console.log('user$ [oktaAuth.getUser()]: ' + this.user$);
    console.log('oktaAuth.getAccessToken(): ' + this.oktaAuth.getAccessToken());

      // Get current user access token
      // const accessToken = this.oktaAuth.getAccessToken().accessToken;
      // Get user information
      // const userInfo = this.oktaAuth.getOktaAuth().token.getUserInfo(accessToken);

      // Prepare httpHeaders
      this.httpHeaders = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.oktaAuth.getAccessToken());

      // Get user profile information of logged in user through GET
      this.http.get('https://dev-713629.oktapreview.com/api/v1/userinfo', {headers: this.httpHeaders})
        .subscribe((user) => {
          this.user$ = user;
        });

    console.log('user$ [GET /v1/userinfo]: ' + this.user$);
      //console.log('userInfo: ' + userInfo);

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
