import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { Dare } from '../core/models/dare.model'
import { Game } from '../core/models/game.model'
import { Question } from '../core/models/question.model'
import { RulesComponent } from '../shared/components/rules/rules.component'

@Component({
  selector: 'app-custom-game',
  templateUrl: './custom-game.component.html',
  styleUrls: ['./custom-game.component.scss'],
})
export class CustomGameComponent {
  game: Game
  questionCard: Question
  dareCard: Dare
  flipped: boolean = false
  daresArray: Dare[]
  questionsArray: Question[]

  constructor(
    private router: Router,
    protected dialog: MatDialog,
    private location: Location,
  ) {
    this.game = this.router.getCurrentNavigation().extras.state.data
    this.initializeGame(this.game)
  }

  numberArray(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(0)
    }
    return arr
  }

  flip(event): void {
    var element = event.currentTarget
    this.flipped = !this.flipped
    if (element.className === 'card') {
      if (element.style.transform == 'rotateY(180deg)') {
        element.style.transform = 'rotateY(0deg)'
      } else {
        element.style.transform = 'rotateY(180deg)'
      }
    }

    if (!this.flipped) {
      setTimeout(() => {
        this.loadNextCard(event)
      }, 2000)
    }
  }

  initializeGame(game: Game): void {
    this.daresArray = game.dares
    this.questionsArray = game.questions
    this.dareCard = this.daresArray[0]
    this.questionCard = this.questionsArray[0]
  }

  close(): void {
    this.location.back()
  }

  loadNextCard(event): void {
    event.path[3].className === 'dares'
      ? this.loadNewDare(event)
      : this.loadNewQuestion(event)
  }

  loadNewQuestion(event): void {
    this.questionsArray.shift()
    if (this.questionsArray.length === 0) {
      event.path[3].style.display = 'none'
      if (this.daresArray.length === 0) {
        this.close()
      }
    }
    this.questionCard = this.questionsArray[0]
  }

  loadNewDare(event): void {
    this.daresArray.shift()
    if (this.daresArray.length === 0) {
      event.path[3].style.display = 'none'
      if (this.questionsArray.length === 0) {
        this.close()
      }
    }
    this.dareCard = this.daresArray[0]
  }

  openRules(): void {
    const dialogRef = this.dialog.open(RulesComponent, {
      width: '500px',
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed')
    })
  }
}
