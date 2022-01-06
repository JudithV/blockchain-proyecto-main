import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarForm = false;

  encuestas = [{
    pregunta: '¿Cuál es tu macota favorita?',
    resultados: [0, 4, 3, 2],
    votada: true
  },
  {
    pregunta: '¿Cuál es tu día de la semana favorito?',
    resultados: [2, 7, 9, 3],
    votada: false
  }]
}
