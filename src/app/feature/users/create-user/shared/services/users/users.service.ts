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



  getUsers(): Promise<any> {
    return this.http
      .get<any>(`${this.apiUrl}/?page=2`)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        console.error('Error al obtener la lista de usuarios', error);
        throw error; // Opcional: relanza el error para que el componente pueda manejarlo
      });
  }

  createUser(name: string, job: string): Promise<any> {
    const user = {
      name: name,
      job: job,
    };

    return this.http.post<any>(this.apiUrl, user).toPromise()
    .then((response) => response);
  }
  async deleteUserForIndex(index: number): Promise<void> {
    const url = `${this.apiUrl}/${index}`;

    try {
      await this.http.delete(url).toPromise();
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
      throw error;
    }
  }
}
