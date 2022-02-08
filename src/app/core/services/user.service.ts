import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { convertSnaps } from './common'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>
  pictureUrl$: Observable<string>

  constructor(
    protected fireAuth: AngularFireAuth,
    protected db: AngularFirestore,
    protected router: Router,
  ) {
    this.isLoggedIn$ = fireAuth.authState.pipe(map((user) => !!user))
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn))
    this.pictureUrl$ = fireAuth.authState.pipe(
      map((user) => (user ? user.photoURL : null)),
    )
  }

  getUserId(): Observable<string> {
    return this.fireAuth.authState.pipe(map((user) => user.uid))
  }

  getUser() {
    return this.fireAuth.authState
  }

  getLast5Elements(collection: string, userId: string): Observable<any> {
    return this.db
      .collection('users/' + userId + '/' + collection, (ref) => ref.limit(5))
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  getCollectionLength(collection: string, userId: string): Observable<any> {
    return this.db
      .collection('users/' + userId + '/' + collection)
      .get()
      .pipe(map((results) => results.size))
  }

  logout() {
    this.fireAuth.signOut()
    this.router.navigateByUrl('/auth')
  }
}
