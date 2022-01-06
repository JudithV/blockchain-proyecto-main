import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  @Input() pregunta: string;
  @Input()
  resultados: number[];
  @Input()
  votada: boolean;

  numeroDeVotos: number;

  constructor() {
    this.pregunta = "";
    this.resultados = [];
    this.votada = false;
    this.numeroDeVotos = 0;
   }

  ngOnInit(): void {
    if(this.resultados.length){
      this.numeroDeVotos = this.resultados.reduce((acu, actu) => {
        return acu += actu;
      });
    }else{
      this.numeroDeVotos = 0;
    }
  }

}
