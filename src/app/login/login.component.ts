import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AF } from './../providers/af';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AF, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.af.login().then((data) => {
      this.router.navigate(['']);
    });
  }

}
