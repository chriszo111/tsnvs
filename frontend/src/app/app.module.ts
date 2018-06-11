import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OktaAuthModule, OktaCallbackComponent } from "@okta/okta-angular";
import { Routes, RouterModule } from "@angular/router";

const config = {
  issuer: 'https://dev-713629.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:{port}/implicit/callback',
  clientId: '0oaffjdfgpI5dUuIE0h7'
};

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
