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
      email: ['', [required, Validators.email]],
      password: ['', [required, Validators.minLength(8)]],
    });
  }


  async onSubmit(): Promise<void> {
    try {
      const { email, password } = this.user;
      const response = await this.loginService.login(email, password);
      if (response && response.token) {
        this.redirectUsers();
      }
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
    }
  }


  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
