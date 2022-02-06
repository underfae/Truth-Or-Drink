import { Component, OnInit } from '@angular/core';
import { Dare } from '../core/dare.model';
import { Game } from '../core/game.model';
import { Question } from '../core/question.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  latestQuestions: Question[] = [
    { name: 'Udawaj komara przez 30 sekund', value: 2 },
    { name: 'Spróbuj polizać łokieć', value: 3 },
    { name: 'Zachowuj się jak twój ulubiony superbohater', value: 1 },
    { name: 'Noś  ubrania na lewą stronę', value: 1 },
    { name: 'Zjedz szczyptę pieprzu', value: 3 },
  ];
  latestDares: Dare[] = [
    { name: 'Udawaj komara przez 30 sekund', value: 2 },
    { name: 'Spróbuj polizać łokieć', value: 3 },
    { name: 'Zachowuj się jak twój ulubiony superbohater', value: 1 },
    { name: 'Noś  ubrania na lewą stronę', value: 1 },
    { name: 'Zjedz szczyptę pieprzu', value: 3 },
  ];
  latestGames = [
    { name: 'Na zjazd szachistów' },
    { name: 'Na zjazd szachistów 1' },
    { name: 'Na zjazd szachistów 2' },
    { name: 'Na zjazd szachistów 3' },
    { name: 'Na zjazd szachistów 4' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  numberArray(value: number): number[] {
    return Array(value).fill(4);
  }
}
