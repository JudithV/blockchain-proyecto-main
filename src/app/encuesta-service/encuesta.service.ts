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

  async getEncuestas(): Promise<Encuesta[]> {
    const encuestas: Encuesta[] = [];
    const totalEncuestas = await this.web3.llamar("getTotalEncuestas");
    const cuenta = await this.web3.getCuenta();
    const votante = await this.web3.llamar("getVotante", cuenta);
    const votanteNormalizado = this.normalizarVotante(votante);

    for(let i = 0; i < totalEncuestas; i++){
      const encuesta = await this.web3.llamar("getEncuesta", i);
      const encuestaNormalizada = this.normalizarEncuesta(encuesta, votanteNormalizado);
      encuestas.push(encuestaNormalizada);
    }

    return encuestas;
  }

  private normalizarVotante(votante) {
    return{
      id: votante[0],
      votadas: votante[1].map(voto => parseInt(voto))
    }
  }

  private normalizarEncuesta(encuesta, votante): Encuesta {
    return{
      id: parseInt(encuesta[0]),
      pregunta: encuesta[1],
      resultados: encuesta[2].map(voto => parseInt(voto)),
      opciones: encuesta[3],
      votada: votante.votadas.length && votante.votadas.find(votada => votada == encuesta[0]) != undefined
    }
  }

  votar(encuesta: EncuestaVotar) {
    this.web3.ejecutarTransaccion('votar', encuesta.id, encuesta.voto);
  }

  crearEncuesta(encuesta: EncuestaForm) {
    this.web3.ejecutarTransaccion('crearEncuesta', encuesta.pregunta, encuesta.opciones);
  }

  paraEventos(nombre: string){
    return this.web3.paraEventos(nombre);
  }
}
