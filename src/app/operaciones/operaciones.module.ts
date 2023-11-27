import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { RcpComponent } from './pages/rcp/RcpComponent';
import { IngresarPesoComponent } from './pages/ingresar-peso/ingresar-peso.component';

import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { CardModule } from 'primeng/card';
//import { VgPlyrModule } from 'videogular2/plyr';
import { CountdownModule } from 'ngx-countdown';

import { ProgressBarModule } from 'primeng/progressbar';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    RcpComponent,
    IngresarPesoComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    
    InputNumberModule,
    ReactiveFormsModule,
    ButtonModule,
    OrganizationChartModule,
    ToastModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CardModule,
    CountdownModule,
    ProgressBarModule,
    TimepickerModule.forRoot(),
    DiagramModule,
    TreeModule,
    
  ]
})
export class OperacionesModule { }
