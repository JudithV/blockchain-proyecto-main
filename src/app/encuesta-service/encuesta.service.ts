import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Web3Service } from '../blockchain/web3.service';
import { Encuesta, EncuestaForm, EncuestaVotar } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private web3: Web3Service) { }

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
    this.web3.ejecutarTransaccion('votar', encuesta.id, encuesta.voto);
  }

  crearEncuesta(encuesta: EncuestaForm) {
    this.web3.ejecutarTransaccion('crearEncuesta', encuesta.pregunta, encuesta.opciones);
  }
}
