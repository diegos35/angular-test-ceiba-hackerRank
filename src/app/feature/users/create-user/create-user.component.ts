import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {


  createUserForm!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService,
  ) {
    this.createUserForm =   this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }


  ngOnInit(): void {
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  async createUser(){
    try {
      if (this.createUserForm.valid) {
        const { name, job } = this.createUserForm.value;
        const response = await this.usersService.createUser(name,job);
        this.redirectToListUsers();
      }else{
        this.createUserForm.markAllAsTouched()
      }
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
    }
  }
}
