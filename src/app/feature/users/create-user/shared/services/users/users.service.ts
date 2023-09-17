import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}


  getUsers():Observable<any> {
    return this.http.get<any>(this.apiUrl+'/?page=2');
  }

  createUser() {

  }

  deleteUserForIndex(index: number) {
    const url = `${this.apiUrl}/${index}`;
    return this.http.delete<void>(url);
  }
}
