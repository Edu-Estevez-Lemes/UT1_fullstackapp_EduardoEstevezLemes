import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {
  datos: any[] = []; // Variable para almacenar los datos de mascotas
  nuevoMascota: any = { // Inicializa el objeto para nueva mascota
    id: 0,
    nombre: '',
    tipo: '',
    raza: '',
    sexo: '',
    edad: 0,
    serial_chip: '',
    id_propietario: 0
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerDatos(); // Llama a la función al inicializar el componente
  }

  obtenerDatos() {
    this.apiService.getDatos('mascotas').subscribe({
        next: (response) => {
            console.log('Respuesta del backend:', response); // Imprime la respuesta
            
            if (Array.isArray(response)) {
                this.datos = response; // Asigna la respuesta si es un array
            } else {
                console.error('La respuesta no es un array', response);
                this.datos = [response]; // Si solo devuelves un objeto, lo metemos en un array
            }
        },
        error: (error) => {
            console.error('Error al obtener los datos:', error);
        },
        complete: () => {
            console.log('Solicitud completa');
        },
    });
}


  agregarRegistro() {
    this.nuevoMascota.edad = Number(this.nuevoMascota.edad);
    this.nuevoMascota.id_propietario = Number(this.nuevoMascota.id_propietario);
    
    this.apiService.agregarDatos('mascotas', this.nuevoMascota).subscribe({
      next: (response) => {
        console.log('Mascota agregada:', response);
        this.datos.push(response);
        this.nuevoMascota = {
          id: 0,
          nombre: '',
          tipo: '',
          raza: '',
          sexo: '',
          edad: 0,
          serial_chip: '',
          id_propietario: 0
        };
      },
      error: (error) => {
        console.error('Error al agregar la mascota:', error);
      },
    });
  }

  borrarRegistro(mascotaId: number) {
    this.apiService.borrarDatos('mascotas', mascotaId).subscribe({
      next: () => {
        this.datos = this.datos.filter(mascota => mascota.id !== mascotaId);
      },
      error: (error) => {
        console.error('Error al borrar la mascota:', error);
      },
    });
  }
}

