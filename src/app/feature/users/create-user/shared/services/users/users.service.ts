import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private token: string | null = localStorage.getItem('token');

  constructor(private http: HttpClient) {}



  getUsers(): Promise<any> {
    const headers = this.token
      ? new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        })
      : undefined;

    return this.http
      .get<any>(`${this.apiUrl}/?page=2`, { headers })
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        console.error('Error al obtener la lista de usuarios', error);
        throw error;
      });
  }

  createUser(name: string, job: string): Promise<any> {
    const headers = this.token
    ? new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      })
    : undefined;

    const user = {
      name: name,
      job: job,
    };

    return this.http.post<any>(this.apiUrl, user, {headers}).toPromise()
    .then((response) => response);
  }

  deleteUserForIndex(index: number): any {
    const headers = this.token
    ? new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      })
    : undefined;

    const url = `${this.apiUrl}/${index}`;

    return this.http.delete(url,{headers}).toPromise();
  }
}
