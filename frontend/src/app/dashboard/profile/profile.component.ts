import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {forEach} from "@angular/router/src/utils/collection";
import {element} from "protractor";
import {st} from "@angular/core/src/render3";
import set = Reflect.set;

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  isAuthenticated: boolean;
  user$: any;
  user: any;
  httpHeaders: HttpHeaders;
  showTitle: boolean;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    this.oktaAuth.getUser().then((user) => {
      // Got user
      this.oktaAuth.getAccessToken().then((token) => {
        // Got access token
        let httpHeaders: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        this.user$ = this.http.get('https://dev-713629.oktapreview.com/oauth2/default/v1/userinfo/', {headers: httpHeaders});
        this.user$.subscribe((user) => {console.log(user)});
      });
    });

    // Show the full title
    this.showTitle = false;
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
