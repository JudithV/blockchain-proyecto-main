import { Component } from '@angular/core';
import { Encuesta } from './types';

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

  encuestas: Encuesta[] = [{
    id: 1,
    pregunta: "¿Cuál es tu mascota favorita?",
    resultados: [0, 4, 3, 2],
    opciones: ["Gatos", "Perros", "Hámsters", "Peces"],
    votada: true
  },
  {
    id: 2,
    pregunta: "¿Cuál es tu día de la semana favorito?",
    resultados: [2, 7, 9, 3],
    opciones: ["Jueves", "Viernes", "Sábado", "Domingo"],
    votada: false
  }];

  setEncuestaActiva(encuesta: Encuesta | null){
    this.encuestaActiva = null;

    setTimeout(()=> {
      this.encuestaActiva = encuesta;
    }, 500);
  }
}
