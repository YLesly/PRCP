import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DiagramModule, SymbolPaletteModule, OverviewModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule, SymbolPaletteModule, OverviewModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
