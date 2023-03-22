import { NgModule } from '@angular/core';
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
import{RouterModule, Routes} from '@angular/router';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';

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

];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LateralComponent,
    NavigationComponent,
    DashboardComponent,
    ColaboradorComponent,
    AsignacionesComponent
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
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
