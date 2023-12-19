import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';
import { GuardarFacturasComponent } from './guardar-facturas/guardar-facturas.component';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';
import { SharedModule } from 'src/app/utils/shared-module/shared-module.module';


@NgModule({
  declarations: [
    MostrarFacturasComponent,
    GuardarFacturasComponent,
    MostrarFacturaComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    SharedModule,
  ]
})
export class FacturaModule { }
