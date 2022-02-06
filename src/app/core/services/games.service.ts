
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dare } from '../dare.model';
import { convertSnaps } from './common';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private db: AngularFirestore) {}

  loadUserQuestions(userId: string){}
  deleteQuestion(questionId: string, userId: string){}
  editQuestion(questionId: string, userId: string){}
  createQuestion(userId: string){}
}
