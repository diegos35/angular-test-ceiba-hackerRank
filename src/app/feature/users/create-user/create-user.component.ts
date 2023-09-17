import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  createUser(){
    console.log('as')
  }
}
