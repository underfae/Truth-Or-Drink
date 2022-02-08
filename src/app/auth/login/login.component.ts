import * as firebaseui from 'firebaseui'
import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import EmailAuthProvider = firebase.auth.EmailAuthProvider
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  ui: firebaseui.auth.AuthUI
  constructor(protected router: Router, protected fireAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.fireAuth.app.then((app) => {
      const uiConfig = {
        signInOptions: [
          EmailAuthProvider.PROVIDER_ID,
          GoogleAuthProvider.PROVIDER_ID,
          TwitterAuthProvider.PROVIDER_ID,
          FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: this.onLogin.bind(this),
        },
      }
      this.ui = new firebaseui.auth.AuthUI(app.auth())
      this.ui.start('#firebaseui-auth-container', uiConfig)
      this.ui.disableAutoSignIn()
    })
  }

  onLogin(): void {
    this.router.navigateByUrl('profile')
  }

  openRegistration() {
    this.router.navigateByUrl('auth/register')
  }

  ngOnDestroy() {
    this.ui.delete()
  }
}
