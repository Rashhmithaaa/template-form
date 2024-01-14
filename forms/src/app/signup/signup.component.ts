import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  

  isPasswordInvalid(): boolean {
    const passwordControl = this.signupForm.get('password');
    return !!passwordControl && passwordControl.hasError('minlength') && passwordControl.touched;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const username = this.signupForm.get('username')?.value;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
  
      // Call AuthService to create a new user
      this.authService.signup(username, email, password);
  
      // For demonstration, let's assume the signup is successful
      this.router.navigate(['/login']);
    }
  }
  
}
