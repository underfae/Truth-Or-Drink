import { AngularFirestore } from '@angular/fire/firestore'
import { Injectable } from '@angular/core'

import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Game } from '../models/game.model'
import { convertSnaps } from './common'

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private db: AngularFirestore) {}

  loadUserGames(userId?: string): Observable<Game[]> {
    return this.db
      .collection('users/' + userId + '/games')
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  deleteGame(gameId: string, userId?: string): Observable<any> {
    return from(this.db.doc(`users/${userId}/games/${gameId}`).delete())
  }

  editGame(question: Game, gameId: string, userId?: string): Observable<any> {
    return from(this.db.doc(`users/${userId}/games/${gameId}`).update(question))
  }

  createGame(game: Partial<Game>, userId: string) {
    let save$: Observable<any>
    save$ = from(this.db.collection(`users/${userId}/games`).add(game))
    return save$.pipe(
      map((res) => {
        return {
          id: res.id,
          ...game,
        }
      }),
    )
  }
}
