import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundError404Component } from './components/not-found-error404/not-found-error404.component';
import { CochesListaComponent } from './coches/coches-lista/coches-lista.component';
import { AppRoutingModule } from './app-routing.module';
import { CochesDetallesComponent } from './coches/coches-detalles/coches-detalles.component';
import { CochesOpinionesComponent } from './coches/coches-opiniones/coches-opiniones.component';
import { CochesImagenesComponent } from './coches/coches-imagenes/coches-imagenes.component';
import { EquipamientosComponent } from './components/equipamientos/equipamientos.component';
import { CartComponent } from './components/cart/cart.component';
import { SwiperModule } from 'swiper/angular';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NotFoundError404Component,
    CochesListaComponent,
    CochesDetallesComponent,
    CochesOpinionesComponent,
    CochesImagenesComponent,
    EquipamientosComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
