import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Encuesta, EncuestaForm, EncuestaVotar } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor() { }

  getEncuestas(): Observable<Encuesta[]> {
    return of([{
      id: 1,
      pregunta: "¿Cuál es tu mascota favorita?",
      resultados: [4, 4, 3, 2],
      opciones: ["Gatos", "Perros", "Hámsters", "Peces"],
      votada: true
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu día de la semana favorito?",
      resultados: [2, 7, 9, 3],
      opciones: ["Jueves", "Viernes", "Sábado", "Domingo"],
      votada: false
    }]).pipe(delay(2000));
  }

  votar(encuesta: EncuestaVotar) {
    console.log(encuesta);
  }

  crearEncuesta(encuesta: EncuestaForm) {
    console.log(encuesta);
  }
}
