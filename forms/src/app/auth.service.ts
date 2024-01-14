import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signedUpUsers: { username: string; email: string; password: string }[] = [];

  constructor(private router: Router) {}

  signup(username: string, email: string, password: string): void {
    // Perform the signup logic here
    // For demonstration, let's assume the signup is successful

    // Store the signed-up user details
    this.signedUpUsers.push({ username, email, password });

    // Optionally, navigate to login page or perform any other post-signup logic
    this.router.navigate(['/login']);
  }

  login(username: string, password: string): boolean {
    // Check if the entered username and password match any signed-up users
    const userExists = this.signedUpUsers.some(
      (user) => user.username === username && user.password === password
    );

    return userExists;
  }
}
