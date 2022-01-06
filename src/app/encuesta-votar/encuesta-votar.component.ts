import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-encuesta-votar',
  templateUrl: './encuesta-votar.component.html',
  styleUrls: ['./encuesta-votar.component.css']
})
export class EncuestaVotarComponent implements AfterViewInit {
  @Input() votado: boolean;
  @Input() opciones: string[];
  @Input() resultados: number[];
  @Input() pregunta: string;

  votarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pregunta = "";
    this.votado = false;
    this.opciones = [];
    this.resultados = [];

    this.votarForm = this.fb.group({
      elegido: this.fb.control("", [Validators.required])
    });
  }

  ngAfterViewInit(): void {
    if(this.votado){
      this.generarGrafica();
    }
  }

  enviarForm(){
    console.log(this.votarForm.value);
  }

  generarGrafica() {
    const options: ApexCharts.ApexOptions = {
      series: [{
        data: this.resultados
      }],
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: this.opciones
      }
    };

    const grafica = new ApexCharts(document.getElementById('resultados-encuesta'), options);
    grafica.render();
  }

}
