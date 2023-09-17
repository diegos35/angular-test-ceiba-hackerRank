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
    public  login(email: string, password: string) {
      const loginData = {
        email: email,
        password: password,
      };

      return this.http.post<LoginResponse>(this.apiUrl, loginData)
      .pipe(
        tap(response => this.saveToken(response.token))
      );
    }

    saveToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken() {
      const token = localStorage.getItem('token');
      return token;
    }


  }
