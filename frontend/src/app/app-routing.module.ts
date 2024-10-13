// Ruta: src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component'; // Importa el componente

const routes: Routes = [
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' }, // Redirige a mascotas por defecto
  { path: 'mascotas', component: MascotasComponent },   {
    path: 'themascotas',
    loadChildren: () => import('./themascotas/themascotas.module').then( m => m.ThemascotasPageModule)
  }
// Ruta para el componente de mascotas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
