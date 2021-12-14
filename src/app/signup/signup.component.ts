import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor() { }

  ngOnInit(): void {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    // TODO: call signup
  }

}



