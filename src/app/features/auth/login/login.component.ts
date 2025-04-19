import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; // Agregar FormGroup
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'; // Agregar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup; // Definir tipo explícito

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Inyectar Router
  ) {
    // Inicializar en el constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.value.email!, // Non-null assertion
        password: this.loginForm.value.password!
      }).subscribe({
        next: () => this.router.navigate(['/home']), // Agregar navegación
        error: (err) => console.error('Error login:', err)
      });
    }
  }
}