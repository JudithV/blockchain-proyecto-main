import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaForm } from '../types';


@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent {
  encuestaForm: FormGroup;

  @Output() encuestaCreada: EventEmitter<EncuestaForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.encuestaForm = this.fb.group({
      pregunta: this.fb.control('', [Validators.required]),
      opcion1: this.fb.control(''),
      opcion2: this.fb.control(''),
      opcion3: this.fb.control(''),
      opcion4: this.fb.control(''),
    });
  }

  submitForm() {
    const datosForm: EncuestaForm = {
      pregunta: this.encuestaForm.get('pregunta')!.value,
      opciones: [this.encuestaForm.get('opcion1')!.value, this.encuestaForm.get('opcion2')!.value, this.encuestaForm.get('opcion3')!.value, this.encuestaForm.get('opcion4')!.value]
    };

    this.encuestaCreada.emit(datosForm);
  }

}
