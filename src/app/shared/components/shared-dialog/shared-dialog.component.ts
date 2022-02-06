import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedDialogData } from 'src/app/core/shared-dialog-data.model';

@Component({
  templateUrl: './shared-dialog.component.html',
  styleUrls:['./shared-dialog.component.scss']
})
export class SharedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SharedDialogData,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}



