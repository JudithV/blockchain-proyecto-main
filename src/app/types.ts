export interface Encuesta{
  id: number;
  pregunta:string;
  resultados: number[];
  opciones: string[];
}

export interface Votante{
  id: string;
  votadas: number[];
}
