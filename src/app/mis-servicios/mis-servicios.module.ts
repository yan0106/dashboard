import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisServiciosOfrecidosComponent } from './mis-servicios-ofrecidos/mis-servicios-ofrecidos.component';
import { MisServiciosAdquiridosComponent } from './mis-servicios-adquiridos/mis-servicios-adquiridos.component';
import { MisServiciosRoutingModule } from './mis-servicios-routing.module';



@NgModule({
  declarations: [
    MisServiciosOfrecidosComponent,
    MisServiciosAdquiridosComponent
  ],
  imports: [
    CommonModule,
    MisServiciosRoutingModule
  ]
})
export class MisServiciosModule { }
