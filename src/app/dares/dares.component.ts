import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

import { Dare } from '../core/models/dare.model'
import { DaresService } from '../core/services/dares.service'
import { SharedDialogComponent } from '../shared/components/shared-dialog/shared-dialog.component'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-dares',
  templateUrl: './dares.component.html',
  styleUrls: ['./dares.component.scss'],
})
export class DaresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'level', 'category', 'options']
  dataSource: MatTableDataSource<any>
  userId: string

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    protected dialog: MatDialog,
    protected daresService: DaresService,
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
    this.daresService.loadUserDares(id).subscribe((data) => {
      this.dataSource = new MatTableDataSource<Dare>(data)
      this.dataSource.paginator = this.paginator
    })
  }

  deleteDare(element): void {
    this.daresService
      .deleteDare(element.id, this.userId)
      .pipe(
        tap(() => {
          console.log('Usunięto wyzwanie')
          this.reloadElements(this.userId)
        }),
        catchError((err) => {
          alert('Nie udało się usunąć wyzwania')
          return throwError(err)
        }),
      )
      .subscribe()
  }

  editDare(element: Dare): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Edytuj',
        title: 'Edytuj wyzwanie',
        game: false,
        level: element.level,
        name: element.name,
        category: element.category,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newDare = { ...result } as Dare
      this.daresService
        .editDare(newDare, element.id, this.userId)
        .pipe(
          tap(() => {
            console.log('Edytowano wyzwanie')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            alert('Nie udało się edytować wyzwania')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }

  addDare(): void {
    let dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '600px',
      data: {
        submitButton: 'Dodaj',
        title: 'Utwórz nowe wyzwanie',
        game: false,
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      const newDare = { ...result } as Dare
      this.daresService
        .createDare(newDare, this.userId)
        .pipe(
          tap(() => {
            console.log('Utworzono wyzwanie')
            this.reloadElements(this.userId)
          }),
          catchError((err) => {
            console.log(err)
            alert('Nie udało się utworzyć wyzwania')
            return throwError(err)
          }),
        )
        .subscribe()
    })
  }
}
