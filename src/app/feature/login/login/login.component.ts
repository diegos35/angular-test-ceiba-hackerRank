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
    this.loginForm =   this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  ngOnInit(): void {

  }


  async onSubmit(): Promise<void> {
    try {
      if (this.loginForm.valid) {
        const { email, password } = await this.loginForm.value;
        await this.loginService.login(email,password);

          this.redirectUsers();
      }else{
        this.loginForm.markAllAsTouched()
      }
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
    }
  }


  /**
   * Este método no se puede modificar
   * */
    public redirectUsers(): any {
      this.router.navigate(['users']);
    }

}
