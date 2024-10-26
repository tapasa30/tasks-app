// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) {}

  onLoginFormSubmit(): void {
    let formValue = this.loginForm.value;

    this.authService.login(formValue.email, formValue.password).subscribe(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('tokenType', response.token_type);

      this.router.navigate(['/dashboard']);
    });
  }
}
