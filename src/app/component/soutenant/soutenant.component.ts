import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soutenant',
  templateUrl: './soutenant.component.html',
  styleUrls: ['./soutenant.component.scss']
})
export class SoutenantComponent implements OnInit {

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
