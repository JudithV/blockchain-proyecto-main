import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

declare var window: any;
const contratoAbi = require("./contratoAbi.json");

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contrato: Contract;
  private direccionContrato = '0xcAe8C136ca4a28A0C5F133192E30f0b6734E319C';

  constructor(private zone: NgZone) {
    if(window.web3) {
      this.web3 = new Web3(window.ethereum);
      this.contrato = new this.web3.eth.Contract(contratoAbi, this.direccionContrato);

      window.ethereum.enable().catch((err) => {
        console.log(err);
      });
    } else{
      console.warn("No se encontró Metamask. Añádalo a su navegador");
    }
  }

  getCuenta(): Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || " ");
  }

  async ejecutarTransaccion(nombreFuncion, ...args: any[]): Promise<void> {
    const cuenta = await this.getCuenta();
    this.contrato.methods[nombreFuncion](...args).send({ from: cuenta });
  }

  async llamar(nombreFuncion, ...args: any[]) {
    const cuenta = await this.getCuenta();
    return this.contrato.methods[nombreFuncion](...args).call({ from: cuenta });
  }

  paraEventos(evento: string) {
    return new Observable((observer) => {
      this.contrato.events[evento]().on('data', (data) => {
        this.zone.run(() => {
          observer.next({
            event: data.event,
            payload: data.returnValues
          });
        })

      })
    })
  }
}
