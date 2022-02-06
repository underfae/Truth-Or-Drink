import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dare } from '../core/dare.model';
import { Question } from '../core/question.model';
import { DaresService } from '../core/services/dares.service';
import { QuestionsService } from '../core/services/questions.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  dares$: Observable<Dare[]>;
  questions$: Observable<Question[]>;

  constructor(
          protected router: Router,
          protected daresService: DaresService,
          protected questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.reloadElements();
  }

  reloadElements(){
    this.dares$ = this.daresService.loadFreeGameDares("D", 2);
    this.questions$ = this.questionService.loadFreeGameQuestions("D", 2);
  }

  menu():void{
    this.router.navigateByUrl("/config")
  }

  shuffle(){

  }

  nextCard(): void{

  }

}
