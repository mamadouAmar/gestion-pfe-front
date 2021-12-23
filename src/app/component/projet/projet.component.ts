import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  close = "close";

  onCacher() {
    if(this.close == "close"){
      this.close = ""
    }
    else{
      this.close = "close";
    }
  }
}
