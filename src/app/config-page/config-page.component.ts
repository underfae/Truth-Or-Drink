import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameCategory } from '../core/game.model';
import { RulesComponent } from '../shared/components/rules/rules.component';
import { MyErrorStateMatcher } from '../shared/helpers/form.helper';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {

  constructor(protected router: Router, protected dialog: MatDialog) { }

  ngOnInit(): void {
  }
  matcher = new MyErrorStateMatcher();

  form: FormGroup = new FormGroup({
    level: new FormControl(1, Validators.required),
    category: new FormControl(GameCategory.A, Validators.required),
    cardsCount: new FormControl(16, Validators.required)
  })

  play(): void{
    this.router.navigateByUrl("/game");
  }

  showRulesDialog():void{
    const dialogRef = this.dialog.open(RulesComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });

  }
}
