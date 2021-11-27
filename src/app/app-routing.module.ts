import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesDetallesComponent } from './coches/coches-detalles/coches-detalles.component';
import { CochesImagenesComponent } from './coches/coches-imagenes/coches-imagenes.component';
import { CochesListaComponent } from './coches/coches-lista/coches-lista.component';
import { CochesOpinionesComponent } from './coches/coches-opiniones/coches-opiniones.component';
import { CartComponent } from './components/cart/cart.component';
import { EquipamientosComponent } from './components/equipamientos/equipamientos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'coches',
    component: CochesListaComponent
  },
  {
    path: 'coches/:id',
    component: CochesDetallesComponent,
    children: [
      {
        path: 'imagenes',
        component: CochesImagenesComponent
      },
      {
        path: 'opiniones',
        component: CochesOpinionesComponent
      },
      {
        path: '',
        redirectTo: 'imagenes',
        pathMatch: 'full'
      },
      {
        path: '',
        component: NotFoundError404Component
      }
    ]
  },
  {
    path: 'equipamientos',
    component: EquipamientosComponent
  },
  {
    path: 'equipamientos/:id',
    component: EquipamientosComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundError404Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
