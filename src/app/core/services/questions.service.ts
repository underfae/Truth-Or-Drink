import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { from, Observable } from 'rxjs'
import { Question } from '../models/question.model'
import { map } from 'rxjs/operators'
import { convertSnaps } from './common'
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private db: AngularFirestore) {}

  loadFreeGameQuestions(
    category: string,
    maxLevel: number,
  ): Observable<Question[]> {
    return this.db
      .collection('questions', (ref) =>
        ref.where('category', '==', category).where('level', '<=', maxLevel),
      )
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  loadUserQuestions(userId?: string): Observable<Question[]> {
    return this.db
      .collection('users/' + userId + '/questions')
      .get()
      .pipe(map((results) => convertSnaps(results)))
  }

  deleteQuestion(questionId: string, userId?: string): Observable<any> {
    return from(this.db.doc(`users/${userId}/questions/${questionId}`).delete())
  }

  editQuestion(
    question: Question,
    questionId: string,
    userId?: string,
  ): Observable<any> {
    return from(
      this.db.doc(`users/${userId}/questions/${questionId}`).update(question),
    )
  }

  createQuestion(question: Partial<Question>, userId: string) {
    let save$: Observable<any>
    save$ = from(this.db.collection(`users/${userId}/questions`).add(question))
    return save$.pipe(
      map((res) => {
        return {
          id: res.id,
          ...question,
        }
      }),
    )
  }
}
