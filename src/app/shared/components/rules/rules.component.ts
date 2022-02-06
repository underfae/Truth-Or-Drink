import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  constructor(
    public dialogRef: MatDialogRef<RulesComponent>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }
}
