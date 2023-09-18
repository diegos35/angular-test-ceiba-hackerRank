import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  tap } from 'rxjs/operators';


interface LoginResponse {
  token: string;
}
  @Injectable({
    providedIn: 'root',
  })
  export class LoginService {

    private apiUrl = 'https://reqres.in/api/login';

    constructor(private http: HttpClient) {}

    /**
     * Realiza la solicitud de inicio de sesión a la API.
     * @param email El correo electrónico del usuario.
     * @param password La contraseña del usuario.
     * @returns Observable con la respuesta de la solicitud.
     */

    /**
     * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
     * */
    login(email: string, password: string): Promise<{ token: string }> {
      const loginData = {
        email: email,
        password: password,
      };

      return  this.http
        .post<any>(this.apiUrl, loginData)
        .toPromise()
        .catch((error) => {
          console.error('Error en el servicio de login', error);
          throw error;
        });
    }


  }
