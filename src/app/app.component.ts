import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AF } from './providers/af';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean;

  constructor(public afService: AF, private router: Router) {
    this.afService.afAuth.authState.subscribe(
      (auth) => {

        if (auth == null) {
          console.log('Not logged in.');
          this.router.navigate(['login']);
          this.isLoggedIn = false;

        } else {
          console.log('Successfully Logged in.');
          this.afService.displayName = auth.displayName;
          this.afService.email = auth.email;
          this.isLoggedIn = true;
          this.router.navigate(['home']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }
}
