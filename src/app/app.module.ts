import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LateralComponent } from './lateral/lateral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import{RouterModule, Routes} from '@angular/router';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { ActividadesComponent } from './actividades/actividades.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableAsignacionesComponent } from './table-asignaciones/table-asignaciones.component';
import { TableColaboradoresComponent } from './table-colaboradores/table-colaboradores.component';
import { TableIniciativasComponent } from './table-iniciativas/table-iniciativas.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


const routes: Routes=[
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'colaborador',
    component: ColaboradorComponent 
  },
  {
    path:'asignaciones',
    component: AsignacionesComponent 
  },
  {
    path:'actividades',
    component: ActividadesComponent 
  },
  {
    path:'Tasignaciones',
    component: TableAsignacionesComponent
  },
  {
    path:'Tcolaboradores',
    component: TableColaboradoresComponent
  },
  {
    path:'Tiniciativas',
    component: TableIniciativasComponent
  },
 

];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LateralComponent,
    NavigationComponent,
    DashboardComponent,
    ColaboradorComponent,
    AsignacionesComponent,
    ActividadesComponent,
    TableAsignacionesComponent,
    TableColaboradoresComponent,
    TableIniciativasComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
