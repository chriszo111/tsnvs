import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OktaAuthGuard, OktaAuthModule, OktaCallbackComponent } from "@okta/okta-angular";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HighlightDirective } from './dashboard/highlight.directive';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StockMarketComponent } from './utilities/stock-market/stock-market.component';
import { PrivacyComponent } from './info/privacy/privacy.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './info/contact/contact.component';
import { ToSComponent } from './info/to-s/to-s.component';
import { PlayerComponent } from './stats/csgo/player/player.component';
import { CsgoComponent } from './stats/csgo/csgo.component';

const config = {
  issuer: 'https://dev-713629.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oafiwd7qfU6IE4GU0h7',
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
    path: 'stats',
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    },
    children: [
      {
        path: 'csgo',
        component: CsgoComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'info',
    component: InfoComponent,
    children: [
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'tos',
        component: ToSComponent
      }
    ]
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
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    StockMarketComponent,
    PrivacyComponent,
    InfoComponent,
    ContactComponent,
    ToSComponent,
    PlayerComponent,
    CsgoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config),
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
