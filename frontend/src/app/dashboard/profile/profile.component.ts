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
      // Prepare headers
      let httpHeaders: HttpHeaders = new HttpHeaders({'Authorization': 'SSWS 00wm--IcjO9hNlv7nVhZaUtXd26gIlfo27WEKQ-7O5'})
        .append('Content-Type','application/json')
        .append('Accept','application/json');

      console.log('user.sub: ' + user.sub);

        this.user$ = this.http.get('https://dev-713629.oktapreview.com/api/v1/users/' + user.sub, {headers: httpHeaders});
    });

    // Show the full title
    this.showTitle = false;
  }

  changePassword() {
    console.log('changePassword() called');
  }

  toggleTitle() {
    this.showTitle ? this.showTitle = false : this.showTitle = true;
  }
}
