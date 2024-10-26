// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

// Project import
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
