import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ProjetFinDetude } from 'src/app/models/projet-fin-detude';
import { Soutenant} from 'src/app/models/soutenant';
import { Encadreur } from 'src/app/models/encadreur';

@Component({
  selector: 'app-envoyermessage',
  templateUrl: './envoyermessage.component.html',
  styleUrls: ['./envoyermessage.component.scss']
})
export class EnvoyermessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){

  }
  

}


import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: './envoyermessage.component.html',
})
export class DialogOverviewExample {
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

