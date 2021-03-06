import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Dare } from '../core/models/dare.model'
import { DaresService } from '../core/services/dares.service'
import { Question } from '../core/models/question.model'
import { QuestionService } from '../core/services/questions.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  gameConfig
  questionCard: Question
  dareCard: Dare
  flipped: boolean = false
  daresArray: Dare[]
  questionsArray: Question[]

  constructor(
    protected router: Router,
    protected daresService: DaresService,
    protected questionService: QuestionService,
  ) {
    this.gameConfig = this.router.getCurrentNavigation().extras.state.data
    this.initializeGame(this.gameConfig)
  }

  numberArray(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(0)
    }
    return arr
  }

  initializeGame(config): void {
    const half = Number(config.cardsCount) / 2

    console.log(config)
    this.questionService
      .loadFreeGameQuestions(config.category, Number(config.level))
      .subscribe((result) => {
        result.sort(() => Math.random() - 0.5)
        this.questionsArray = result.slice(0, half)
        this.questionCard = result[0]
      })

    this.daresService
      .loadFreeGameDares(config.category, Number(config.level))
      .subscribe((result) => {
        result.sort(() => Math.random() - 0.5)
        this.daresArray = result.slice(0, half)
        this.dareCard = result[0]
      })
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
        this.nextCard(event)
      }, 2000)
    }
  }

  menu(): void {
    this.router.navigateByUrl('/config')
  }

  close(): void {
    this.router.navigateByUrl('/auth')
  }

  nextCard(event): void {
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
}
