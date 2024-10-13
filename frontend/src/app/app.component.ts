import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  datosMascotas: any[] = []; // Para almacenar los datos de mascotas
  datosPropietarios: any[] = []; // Para almacenar los datos de propietarios
  tablaSeleccionada: string = 'mascotas'; // Para saber qué tabla mostrar

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerDatosMascotas();
    this.obtenerDatosPropietarios();
  }

  obtenerDatosMascotas() {
    this.apiService.getDatos('mascotas').subscribe({
      next: (response) => {
        this.datosMascotas = response; // Guarda los datos de mascotas en la variable
      },
      error: (error) => {
        console.error('Error al obtener los datos de mascotas:', error);
      },
    });
  }

  obtenerDatosPropietarios() {
    this.apiService.getDatos('propietarios').subscribe({
      next: (response) => {
        this.datosPropietarios = response; // Guarda los datos de propietarios en la variable
      },
      error: (error) => {
        console.error('Error al obtener los datos de propietarios:', error);
      },
    });
  }

  cambiarTabla(tabla: string) {
    this.tablaSeleccionada = tabla; // Cambia la tabla seleccionada
  }

  agregarRegistro() {
    // Implementa la lógica para agregar un registro
    alert(`Agregar registro a la tabla: ${this.tablaSeleccionada}`);
  }

  borrarRegistro() {
    // Implementa la lógica para borrar un registro
    alert(`Borrar registro de la tabla: ${this.tablaSeleccionada}`);
  }
}

