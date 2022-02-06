import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../question.model';
import { map } from 'rxjs/operators';
import { convertSnaps } from './common';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private db: AngularFirestore) {

  }

  loadFreeGameQuestions(category: string, maxLevel: number): Observable<Question[]> {
    return this.db.collection(
      "questions",
      ref => ref.where('category', '==', category).where('level', '<=', maxLevel)
    ).get()
    .pipe(
      map(results => convertSnaps(results))
    );
  }
  loadUserQuestions(userId: string){}
  deleteQuestion(questionId: string, userId: string){}
  editQuestion(questionId: string, userId: string){}
  createQuestion(userId: string){}

}

