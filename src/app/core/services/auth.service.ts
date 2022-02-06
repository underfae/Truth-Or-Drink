import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dare } from '../dare.model';
import { convertSnaps } from './common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private db: AngularFirestore) {}

  login(){}
  logout(){}
  register(){}
}
