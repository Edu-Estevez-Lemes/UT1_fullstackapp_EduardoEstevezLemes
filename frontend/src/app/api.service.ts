import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // Cambia a HTTP

  constructor(private http: HttpClient) {}

  // Método para obtener datos
  getDatos(tabla: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${tabla}`); // Aquí no especificamos el responseType
  }

  // Método para agregar datos
  agregarDatos(tabla: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${tabla}`, data);
  }

  // Método para borrar datos
  borrarDatos(tabla: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${tabla}/${id}`);
  }
}
