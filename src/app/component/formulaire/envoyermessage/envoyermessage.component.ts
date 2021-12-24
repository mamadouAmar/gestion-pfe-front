import { Component, OnInit , Inject } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ProjetFinDetude } from 'src/app/models/projet-fin-detude';
import { Soutenant} from 'src/app/models/soutenant';
import { Encadreur } from 'src/app/models/encadreur';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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


