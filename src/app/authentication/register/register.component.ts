// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  registerForm = this.formBuilder.group({
    username: '',
    email: '',
    password: '',
    repeatedPassword: ''
  });

  registerSuccess = false;
  registerError = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) {}

  onRegisterFormSubmit(): void {
    let formValue = this.registerForm.value;

    this.authService.register(
      formValue.username,
      formValue.email,
      formValue.password,
      formValue.repeatedPassword
    ).subscribe(
      (next) => {
        this.registerError = false;
        this.registerSuccess = true;
      },
      (error) => {
        this.registerSuccess = false;
        this.registerError = true;
      }
    );
  }
}
