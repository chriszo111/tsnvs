import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OktaAuthGuard, OktaAuthModule, OktaCallbackComponent } from "@okta/okta-angular";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HighlightDirective } from './dashboard/highlight.directive';

/* https://dev-713629.oktapreview.com/oauth2/v1/authorize?idp=0oaffxvx65klCzKXz0h7&client_id=0oaffjdfgpI5dUuIE0h7&response_type=id_token&response_mode=fragment&scope=openid&redirect_uri=https%3A%2F%2Flocalhost:4200%2Fimplicit%2Fcallback&state=WM6D&nonce=YsG76jo */

const config = {
  issuer: 'https://dev-713629.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oaffjdfgpI5dUuIE0h7',
  idps: [
    { type: 'FACEBOOK', id: '0oaffxvx65klCzKXz0h7' }
  ]
};

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'message',
    component: MessageListComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MessageListComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
