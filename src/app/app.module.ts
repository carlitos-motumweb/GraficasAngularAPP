import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GraficaLineasComponent } from './componentes/grafica-lineas/grafica-lineas.component';
import { GraficaBarrasComponent } from './componentes/grafica-barras/grafica-barras.component';
import { GraficaDonasComponent } from './componentes/grafica-donas/grafica-donas.component';
import { GraficaRadarComponent } from './componentes/grafica-radar/grafica-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaLineasComponent,
    GraficaBarrasComponent,
    GraficaDonasComponent,
    GraficaRadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
