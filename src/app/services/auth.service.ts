import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/internal/Observable";
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  authenticationState$: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInRegular(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        firebase.auth().onAuthStateChanged((user) => {
          this.userDetails = user;
        });
      })
      .catch((err) => {
      console.error(err.code, err.message);
    });
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGithub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
