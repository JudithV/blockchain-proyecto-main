import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent {
  encuestaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.encuestaForm = this.fb.group({
      pregunta: this.fb.control("", [Validators.required]),
      opcion1: this.fb.control(""),
      opcion2: this.fb.control(""),
      opcion3: this.fb.control(""),
      opcion4: this.fb.control(""),
    });
  }

  submitForm() {
    console.log(this.encuestaForm.value);
  }

}
