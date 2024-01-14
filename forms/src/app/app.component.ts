import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }
}

  // Implement your authentication logic to update isLoggedIn

