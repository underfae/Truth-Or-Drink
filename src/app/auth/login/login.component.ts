import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import EmailAuthProvider = firebase.auth.EmailAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI;
  constructor( protected router: Router, protected fireAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.fireAuth.app.then(app => {
      const uiConfig = {
        signInOptions: [
          EmailAuthProvider.PROVIDER_ID,
          GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: this.onLogin.bind(this)
        }
      };
      this.ui = new firebaseui.auth.AuthUI(app.auth());
      this.ui.start("#firebaseui-auth-container", uiConfig)
      this.ui.disableAutoSignIn();
    });
  }

  onLogin(result): void {
    this.router.navigateByUrl("/profile")
  }

  openRegistration(){
    this.router.navigateByUrl('auth/register')
  }

  ngOnDestroy(){
    this.ui.delete();
  }
}
