import { Component, Inject, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Question } from 'src/app/core/models/question.model'
import { QuestionService } from 'src/app/core/services/questions.service'
import { UserService } from 'src/app/core/services/user.service'
import { Dare } from 'src/app/core/models/dare.model'
import { DaresService } from 'src/app/core/services/dares.service'

import { MyErrorStateMatcher } from '../../helpers/form.helper'
import { SharedDialogData } from '../../../core/models/shared-dialog-data.model'

@Component({
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
})
export class SharedDialogComponent implements OnInit {
  newElement: FormGroup
  matcher = new MyErrorStateMatcher()
  filteredQuestions: Question[] = []
  filteredDares: Dare[] = []
  userQuestions: Question[]
  userDares: Dare[]

  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SharedDialogData,
    protected questionService: QuestionService,
    protected daresService: DaresService,
    protected userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userService.getUserId().subscribe((userId) => {
      this.questionService.loadUserQuestions(userId).subscribe((questions) => {
        this.userQuestions = questions
      })
      this.daresService.loadUserDares(userId).subscribe((dares) => {
        this.userDares = dares
      })
    })

    this.initForm(this.data.game)
    this.onChange()
  }

  initForm(game: boolean): void {
    this.newElement = new FormGroup({
      level: new FormControl(this.data.level, Validators.required),
      name: new FormControl(this.data.name, Validators.required),
      category: new FormControl(this.data.category, Validators.required),
    })
    if (game) {
      this.newElement.addControl(
        'imageUrl',
        new FormControl(this.data.imageUrl, Validators.required),
      )
      this.newElement.addControl(
        'questions',
        new FormControl([], Validators.required),
      )
      this.newElement.addControl(
        'dares',
        new FormControl([], Validators.required),
      )
    }
    console.log(this.newElement.value)
  }
  onNoClick(): void {
    this.dialogRef.close()
  }

  onChange():void {
    const maxLevel = this.newElement.get('level').value
    const category = this.newElement.get('category').value
    this.filteredQuestions = this.userQuestions?.filter(
      (quest) => quest.level <= maxLevel && quest.category === category,
    )
    this.filteredDares = this.userDares?.filter(
      (dare) => dare.level <= maxLevel && dare.category === category,
    )
  }
}
