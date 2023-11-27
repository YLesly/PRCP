import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RcpComponent } from './pages/rcp/RcpComponent';
import { IngresarPesoComponent } from './pages/ingresar-peso/ingresar-peso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        // recupera el peso
        path: 'resultado/:peso', 
        component:  RcpComponent
      },

      {
        path: '**',
        component: IngresarPesoComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
