export interface Encuesta{
  id: number;
  pregunta:string;
  resultados: number[];
  opciones: string[];
  votada: boolean
}

export interface Votante{
  id: string;
  votadas: number[];
}
