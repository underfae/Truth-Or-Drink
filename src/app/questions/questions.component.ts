import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

import { Question } from '../core/models/question.model'
import { QuestionService } from '../core/services/questions.service'
import { SharedDialogComponent } from '../shared/components/shared-dialog/shared-dialog.component'
import { UserService } from '../core/services/user.service'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'level', 'category', 'options']
  dataSource: MatTableDataSource<any>
  userId: string

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    protected dialog: MatDialog,
    protected questionService: QuestionService,
    protected userService: UserService,
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
    this.questionService.loadUserQuestions(id).subscribe((data) => {
      this.dataSource = new MatTableDataSource<Question>(data)
      this.dataSource.paginator = this.paginator
    })
  }

  deleteQuestion(element): void {
    this.questionService
      .deleteQuestion(element.id, this.userId)
      .pipe(
        tap(() => {
          console.log('Usunięto pytanie')
          this.reloadElements(this.userId)
        }),
        catchError((err) => {
          alert('Nie udało się usunąć pytania')
          return throwError(err)
        }),
      )
      .subscribe()
  }

  editQuestion(element: Question): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Edytuj',
        title: 'Edytuj pytanie',
        game: false,
        level: element.level,
        name: element.name,
        category: element.category,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newQuestion = { ...result } as Question
      this.questionService
        .editQuestion(newQuestion, element.id, this.userId)
        .pipe(
          tap(() => {
            console.log('Edytowano pytanie')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            alert('Nie udało się edytować pytania')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }

  addQuestion(): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Dodaj',
        title: 'Utwórz nowe pytanie',
        game: false,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newQuestion = { ...result } as Question
      this.questionService
        .createQuestion(newQuestion, this.userId)
        .pipe(
          tap(() => {
            console.log('Utworzono pytanie')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            console.log(err)
            alert('Nie udało się utworzyć pytania')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }
}
