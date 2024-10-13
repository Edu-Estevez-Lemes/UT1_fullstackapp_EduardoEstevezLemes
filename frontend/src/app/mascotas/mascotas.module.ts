import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { MascotasComponent } from './mascotas.component';
import { MascotasRoutingModule } from './mascotas-routing.module';

@NgModule({
  declarations: [MascotasComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasRoutingModule // Asegúrate de incluir IonicModule aquí
  ]
})
export class MascotasModule { }


