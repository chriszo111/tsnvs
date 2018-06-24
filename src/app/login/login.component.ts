import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/internal/Observable";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);

        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
      .then((res) => {
        this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }

}
