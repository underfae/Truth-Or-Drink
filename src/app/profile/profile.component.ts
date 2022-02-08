import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Dare } from '../core/models/dare.model'
import { Game } from '../core/models/game.model'
import { Question } from '../core/models/question.model'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  latestQuestions: Question[] = []
  latestDares: Dare[] = []
  latestGames: Game[]
  gamesSize: number
  questionsSize: number
  daresSize: number
  user

  constructor(public userService: UserService, protected router: Router) {
    this.userService.getUser().subscribe((user) => {
      console.log(user)
      this.user = user
      this.getData(user)
      this.getSize(user)
    })
  }

  getSize(user) {
    this.userService
      .getCollectionLength('games', this.user?.uid)
      .subscribe((size) => (this.gamesSize = size))
    this.userService
      .getCollectionLength('questions', this.user?.uid)
      .subscribe((size) => (this.questionsSize = size))
    this.userService
      .getCollectionLength('dares', this.user?.uid)
      .subscribe((size) => (this.daresSize = size))
  }
  getData(user): void {
    this.userService
      .getLast5Elements('games', this.user?.uid)
      .subscribe((games) => (this.latestGames = games))
    this.userService
      .getLast5Elements('questions', this.user?.uid)
      .subscribe((questions) => (this.latestQuestions = questions))
    this.userService
      .getLast5Elements('dares', this.user?.uid)
      .subscribe((dares) => (this.latestDares = dares))
  }

  numberArray(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(0)
    }
    return arr
  }

  playGame(game: Game): void {
    this.router.navigate(['/custom-game'], { state: { data: game } })
  }
}
