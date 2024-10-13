import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  mostrarTablaMascotas: boolean = true;
  mostrarTablaPropietarios: boolean = false;

  // Simulando datos para mascotas y propietarios
  mascotas = [
    { nombre: 'Rex', tipo: 'Perro', raza: 'Labrador', serialChip: '12345' },
    { nombre: 'Miau', tipo: 'Gato', raza: 'Persa', serialChip: '67890' },
  ];

  propietarios = [
    { nombre: 'Juan', apellido: 'Pérez', dni: '12345678A', telefono: '555-1234' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321B', telefono: '555-5678' },
  ];

  mostrarMascotas() {
    this.mostrarTablaMascotas = true;
    this.mostrarTablaPropietarios = false;
  }

  mostrarPropietarios() {
    this.mostrarTablaMascotas = false;
    this.mostrarTablaPropietarios = true;
  }
}

