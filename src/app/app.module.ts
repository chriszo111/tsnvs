import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { AuthService } from './services/auth.service';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InfoComponent } from './info/info.component';
import { ToSComponent } from './info/to-s/to-s.component';
import { PrivacyComponent } from './info/privacy/privacy.component';
import { ContactComponent } from './info/contact/contact.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "./services/auth-guard.service"; // Contains firebase configng

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    ToSComponent,
    PrivacyComponent,
    ContactComponent,
    HighlightDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
