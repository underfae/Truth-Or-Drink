import { AngularFirestore } from '@angular/fire/firestore'
import { Injectable } from '@angular/core'

import { from, Observable } from 'rxjs'

import { Dare } from '../models/dare.model'
import { convertSnaps } from './common'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class DaresService {
  constructor(private db: AngularFirestore) {}

  loadFreeGameDares(category: string, maxLevel: number): Observable<Dare[]> {
    return this.db
      .collection('dares', (ref) =>
        ref.where('category', '==', category).where('level', '<=', maxLevel),
      )
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  loadUserDares(userId?: string): Observable<Dare[]> {
    return this.db
      .collection('users/' + userId + '/dares')
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  deleteDare(dareId: string, userId?: string): Observable<any> {
    return from(this.db.doc(`users/${userId}/dares/${dareId}`).delete())
  }

  editDare(dare: Dare, dareId: string, userId?: string): Observable<any> {
    return from(this.db.doc(`users/${userId}/dares/${dareId}`).update(dare))
  }

  createDare(dare: Partial<Dare>, userId: string) {
    let save$: Observable<any>
    save$ = from(this.db.collection(`users/${userId}/dares`).add(dare))
    return save$.pipe(
      map((res) => {
        return {
          id: res.id,
          ...dare,
        }
      }),
    )
  }
}
