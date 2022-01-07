export interface Encuesta extends EncuestaForm{
  id: number;
  resultados: number[];
  votada: boolean
}

export interface EncuestaForm {
  pregunta:string;
  opciones: string[];
}

export interface EncuestaVotar {
  id: number;
  voto: number;
}

export interface Votante{
  id: string;
  votadas: number[];
}
