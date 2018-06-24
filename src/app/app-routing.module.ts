import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToSComponent} from "./info/to-s/to-s.component";
import {ContactComponent} from "./info/contact/contact.component";
import {PrivacyComponent} from "./info/privacy/privacy.component";
import {InfoComponent} from "./info/info.component";
import {ProfileComponent} from "./dashboard/profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service"; // Contains firebase configng

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
