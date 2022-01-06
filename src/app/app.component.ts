import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarForm = false;

  encuesta = {
    pregunta: '¿Cuál es tu macota favorita?',
    resultados: [0, 4, 3, 2, 1],
    votada: true
  };
}
