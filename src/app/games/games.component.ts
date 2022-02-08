import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

import { Game } from '../core/models/game.model'
import { GamesService } from '../core/services/games.service'
import { SharedDialogComponent } from '../shared/components/shared-dialog/shared-dialog.component'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = [
    'image',
    'name',
    'category',
    'level',
    'questions',
    'dares',
    'options',
  ]
  dataSource: MatTableDataSource<any>
  userId: string

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    protected dialog: MatDialog,
    protected gamesService: GamesService,
    protected userService: UserService,
    protected router: Router,
  ) {}

  ngOnInit(): void {
    this.userService.getUserId().subscribe((id) => {
      this.userId = id
      this.reloadElements(id)
    })
  }

  numberArray(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(0)
    }
    return arr
  }

  reloadElements(id: string): void {
    this.gamesService.loadUserGames(id).subscribe((data) => {
      this.dataSource = new MatTableDataSource<Game>(data)
      this.dataSource.paginator = this.paginator
    })
  }

  deleteGame(element: Game): void {
    this.gamesService
      .deleteGame(element.id, this.userId)
      .pipe(
        tap(() => {
          console.log('Usunięto grę')
          this.reloadElements(this.userId)
        }),
        catchError((err) => {
          alert('Nie udało się usunąć gry')
          return throwError(err)
        }),
      )
      .subscribe()
  }

  editGame(element: Game): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Edytuj',
        title: 'Edytuj grę',
        game: true,
        level: element.level,
        name: element.name,
        category: element.category,
        imageUrl: element.imageUrl,
        dares: element.dares,
        questions: element.questions,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newGame = { ...result } as Game
      this.gamesService
        .editGame(newGame, element.id, this.userId)
        .pipe(
          tap(() => {
            console.log('Edytowano grę')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            alert('Nie udało się edytować gry')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }

  addGame(): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Dodaj',
        title: 'Utwórz nową grę',
        game: true,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newGame = { ...result } as Game
      this.gamesService
        .createGame(newGame, this.userId)
        .pipe(
          tap(() => {
            console.log('Utworzono grę')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            console.log(err)
            alert('Nie udało się utworzyć gry')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }

  playGame(game: Game) {
    this.router.navigate(['/custom-game'], { state: { data: game } })
  }
}
