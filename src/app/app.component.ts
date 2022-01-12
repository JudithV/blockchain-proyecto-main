import { Component, OnInit } from '@angular/core';
import { EncuestaService } from './encuesta-service/encuesta.service';
import { Encuesta, EncuestaForm, EncuestaVotar } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarForm = false;
  encuestaActiva: Encuesta | null = {
    id: 0,
    pregunta: "",
    resultados: [],
    opciones: [],
    votada: false
  };

  encuestas = this.es.getEncuestas();

  constructor(private es: EncuestaService) {

  }
  ngOnInit() {
    this.es.paraEventos("EncuestaCreada").subscribe(() => {
      this.encuestas = this.es.getEncuestas();
    });
  }

  setEncuestaActiva(encuesta: Encuesta | null){
    this.encuestaActiva = null;

    setTimeout(()=> {
      this.encuestaActiva = encuesta;
    }, 500);
  }
  handleCrearEncuesta(encuesta: EncuestaForm) {
    this.es.crearEncuesta(encuesta);
  }

  handleVotoEncuesta(encuesta: EncuestaVotar) {
    this.es.votar(encuesta);
  }
}
