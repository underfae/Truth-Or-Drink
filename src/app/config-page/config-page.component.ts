import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { MyErrorStateMatcher } from '../shared/helpers/form.helper'
import { RulesComponent } from '../shared/components/rules/rules.component'

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss'],
})
export class ConfigPageComponent implements OnInit {
  form: FormGroup
  matcher = new MyErrorStateMatcher()

  constructor(protected router: Router, protected dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      level: new FormControl(null, Validators.required),
      category: new FormControl('D', Validators.required),
      cardsCount: new FormControl(null, Validators.required),
    })
  }

  play(): void {
    this.router.navigate(['/game'], { state: { data: this.form.value } })
  }

  showRulesDialog(): void {
    const dialogRef = this.dialog.open(RulesComponent, {
      width: '500px',
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed')
    })
  }
}
