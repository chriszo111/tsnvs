import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import * as OktaSignIn from '@okta/okta-signin-widget';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-secure',
  templateUrl: 'login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
    signIn;
    widget = new OktaSignIn({
      baseUrl: 'https://dev-713629.oktapreview.com',
      idpDiscovery: {
        requestContext: '/a/app/request/context'
      },
      features: {
        idpDiscovery: false
      }
    });

  constructor(private oktaAuth: OktaAuthService, private router: Router) {
    this.signIn = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/login':
            break;
          case '/':
            break;
          case '/profile':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.widget.renderEl({
        el: '#okta-signin-container'},
      (res) => {
        // Check if idpDiscovery is enabled in Org (still early access!)
        if (res.status === 'IDP_DISCOVERY') {
          res.idpDiscovery.redirectToIdp(this.widget.idpDiscovery.requestContext);
          return;
        }
        // On success status response, redirect
        if (res.status === 'SUCCESS') {
          this.signIn.loginRedirect('/', { sessionToken: res.session.token });
          // Hide the widget
          this.widget.hide();
        }
      },
      (err) => {
        throw err;
      }
    );
  }

}
