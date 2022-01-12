import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

declare var window: any;
const contratoAbi = require("./contratoAbi");

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contrato: Contract;
  private direccionContrato = '0xcAe8C136ca4a28A0C5F133192E30f0b6734E319C';

  constructor() {
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
}
