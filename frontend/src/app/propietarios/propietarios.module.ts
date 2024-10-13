import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule aquí
import { PropietariosComponent } from './propietarios.component';

@NgModule({
  declarations: [PropietariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // Asegúrate de incluir IonicModule aquí
  ]
})
export class PropietariosModule { }
