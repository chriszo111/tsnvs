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
    this.user$ = this.oktaAuth.getUser().then((user) => {
      // Got user
        let httpHeaders: HttpHeaders = new HttpHeaders({'Authorization': 'SSWS 0043k9gXAzA_T8NRKhSM5-ELklPZKI32anYqbsUDzw'})
          .append('Accept', 'application/json').append('Content-Type','application/json');

        this.user$ = this.http.get('https://dev-713629.oktapreview.com/api/v1/users/' + user.sub, {headers: httpHeaders});
        console.log(this.user$);
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
