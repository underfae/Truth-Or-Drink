import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dare } from '../dare.model';
import { convertSnaps } from './common';


@Injectable({
  providedIn: 'root'
})
export class DaresService {
  constructor(private db: AngularFirestore) {

  }

  loadFreeGameDares(category: string, maxLevel: number): Observable<Dare[]> {
    return this.db.collection(
      "dares",
      ref => ref.where('category', '==', category).where('level', '<=', maxLevel)
    ).get()
    .pipe(
      map(results => convertSnaps(results))
    );
  }
  loadUserDares(userId:string){}
  deleteDare(dareId: string, userId: string){}
  editDare(dareId: string, userId: string){}
  createDare(userId: string){}

}

