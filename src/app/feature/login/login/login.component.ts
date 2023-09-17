import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup;
  user = { email: '', password: '' };


  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly loginService :LoginService
  ) {
  }


  ngOnInit(): void {
    this.loginForm = this.initForm();
  }


  private initForm(): FormGroup {
    const { required } = Validators;

    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  onSubmit(): void {
    const { email, password } = this.user;

    if (!email || !password) {
      console.error('El correo y la contraseña son requeridos.');
      return;
    }

    this.loginService.login(email, password).subscribe(
      (response: any) => {
        this.redirectUsers();
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
