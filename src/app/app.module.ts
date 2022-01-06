import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EncuestaVotarComponent } from './encuesta-votar/encuesta-votar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEncuestaComponent,
    EncuestaComponent,
    EncuestaVotarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
